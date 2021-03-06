package com.manager.configuration.security;


import com.manager.configuration.security.oauth2.CustomOAuth2UserService;
import com.manager.configuration.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import com.manager.configuration.security.oauth2.OAuth2AuthenticationFailureHandler;
import com.manager.configuration.security.oauth2.OAuth2AuthenticationSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
    securedEnabled = true,
    jsr250Enabled = true,
    prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private UserDetailServiceImp customUserDetailsService;
  private CustomOAuth2UserService customOAuth2UserService;
  private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
  private OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
  private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

  @Autowired
  public SecurityConfig(UserDetailServiceImp userDetailService, CustomOAuth2UserService oAuth2UserService,
      OAuth2AuthenticationSuccessHandler oAuth2SuccessHandler,
      OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler,
      HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository
  ) {
    this.customUserDetailsService = userDetailService;
    this.customOAuth2UserService = oAuth2UserService;
    this.oAuth2AuthenticationSuccessHandler = oAuth2SuccessHandler;
    this.oAuth2AuthenticationFailureHandler = oAuth2AuthenticationFailureHandler;
    this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
  }

  @Bean
  public TokenAuthenticationFilter tokenAuthenticationFilter() {
    return new TokenAuthenticationFilter();
  }

  /*
    By default, Spring OAuth2 uses HttpSessionOAuth2AuthorizationRequestRepository to save
    the authorization request. But, since our service is stateless, we can't save it in
    the session. We'll save the request in a Base64 encoded cookie instead.
  */
  @Bean
  public HttpCookieOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
    return new HttpCookieOAuth2AuthorizationRequestRepository();
  }

  @Override
  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
    authenticationManagerBuilder
        .userDetailsService(customUserDetailsService)
        .passwordEncoder(passwordEncoder());
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }


  @Bean(BeanIds.AUTHENTICATION_MANAGER)
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
        .cors()
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .csrf()
        .disable()
        .formLogin()
        .disable()
        .httpBasic()
        .disable()
        .exceptionHandling()
        .authenticationEntryPoint(new RestAuthenticationEntryPoint())
        .and()
        .authorizeRequests()
        .antMatchers("/",
            "/error",
            "/favicon.ico",
            "/**/*.png",
            "/**/*.gif",
            "/**/*.svg",
            "/**/*.jpg",
            "/**/*.html",
            "/**/*.css",
            "/**/*.js")
        .permitAll()
        .antMatchers("/auth/**", "/oauth2/**")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .logout()
        .logoutUrl("/auth/logout")
        .invalidateHttpSession(true)
        .logoutSuccessHandler((request, response, authentication) -> {
          response.setStatus(HttpServletResponse.SC_OK);
          response.setHeader("logout", "success");
        })
        .and()
        .oauth2Login()
        .authorizationEndpoint()
        .baseUri("/oauth2/authorize")
        .authorizationRequestRepository(cookieAuthorizationRequestRepository())
        .and()
        .redirectionEndpoint()
        .baseUri("/oauth2/callback/*")
        .and()
        .userInfoEndpoint()
        .userService(customOAuth2UserService)
        .and()
        .successHandler(oAuth2AuthenticationSuccessHandler)
        .failureHandler(oAuth2AuthenticationFailureHandler);

    // Add our custom Token based authentication filter
    http.addFilterBefore(tokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
  }
}
