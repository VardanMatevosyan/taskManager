//package com.manager.configuration.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
//import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
//import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
//import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//import javax.sql.DataSource;
//
///**
// * Resource in our context is the REST API which we have exposed for the crud operation. To access these resources,.
// * the client must be authenticated. In real-time scenarios, whenever a user tries to access these resources,
// * the user will be asked to provide his authenticity and once the user is authorized then he will be allowed to access these protected resources.
// *
// * resourceId : the id for the resource (optional, but recommended and will be validated by the auth server if present).
// */
//
//@Configuration
//@EnableResourceServer
//public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
////    private static final String RESOURCE_ID = "resource_id";
////
////    @Override
////    pub   lic void configure(ResourceServerSecurityConfigurer resources) {
////        resources.resourceId(RESOURCE_ID).stateless(false);
////    }
//
//
//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        http.
//                anonymous().disable()
//                .authorizeRequests()
//                .antMatchers("/users/**").access("hasRole('ROLE_ADMIN')")
//                .antMatchers("/tasks/**").access("hasRole('ROLE_ADMIN')")
//                .antMatchers("/userInfo").permitAll()
//                .and().exceptionHandling().accessDeniedHandler(new OAuth2AccessDeniedHandler());
//    }
//
//
//    @Configuration
//    protected static class AuthenticationManagerConfiguration extends GlobalAuthenticationConfigurerAdapter {
//        private UserDetailsService userDetailServiceImp;
//
//        @Autowired
//        public AuthenticationManagerConfiguration(UserDetailsService userDetailServiceImp) {
//            this.userDetailServiceImp = userDetailServiceImp;
//        }
//        @Override
//        public void init(AuthenticationManagerBuilder auth) throws Exception {
//            auth.inMemoryAuthentication().withUser("admin@admin.com").password("admin").roles("USER");
//        }
//
//    }
//}
