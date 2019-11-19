//package com.manager.configuration.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
//import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
//import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
//import org.springframework.security.oauth2.provider.token.TokenStore;
//import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
//import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//import javax.sql.DataSource;
//
///**
// * OAuth2 Authorization Server Config
// * This class extends AuthorizationServerConfigurerAdapter and is responsible for generating tokens specific to a client.
// * Here, JwtAccessTokenConverter is the helper that translates between JWT encoded token values and OAuth authentication information.
// * We have added our custom signature to make the JWT token more robust.Apart from JwtTokenStore, spring security also provides
// * InMemoryTokenStore and JdbcTokenStore.
// * @EnableAuthorizationServer: Enables an authorization server.AuthorizationServerEndpointsConfigurer
// * defines the authorization and token endpoints and the token services.
// */
//
//@Configuration
//@EnableAuthorizationServer
//public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
//    static final String CLIENT_ID = "taskManager-client";
//    static final String CLIENT_SECRET = "taskManager-secret";
////    static final String CLIENT_SECRET = "$2a$04$e/c1/RfsWuThaWFCrcCuJeoyvwCV0URN/6Pn9ZFlrtIWaU/vj/BfG";
//    static final String GRANT_TYPE_PASSWORD = "password";
//    static final String AUTHORIZATION_CODE = "authorization_code";
//    static final String REFRESH_TOKEN = "refresh_token";
//    static final String IMPLICIT = "implicit";
//    static final String SCOPE_READ = "read";
//    static final String SCOPE_WRITE = "write";
//    static final String TRUST = "trust";
//    static final int ACCESS_TOKEN_VALIDITY_SECONDS = 1*60*60;
//    static final int FREFRESH_TOKEN_VALIDITY_SECONDS = 6*60*60;
//
//
//    private AuthenticationManager authenticationManager;
//    private DataSource dataSource;
//
//    @Autowired
//    public AuthorizationServerConfig(AuthenticationManager authenticationManager, DataSource dataSource) {
//        this.authenticationManager = authenticationManager;
//        this.dataSource = dataSource;
//    }
//
////    @Bean
////    public TokenStore tokenStore() {
////        return new JwtTokenStore(new JwtAccessTokenConverter());
////    }
//
////    @Bean
////    public JwtAccessTokenConverter accessTokenConverter() {
////        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
////        converter.setSigningKey("as466gf");
////        return converter;
////    }
//
//
//    @Override
//    public void configure(ClientDetailsServiceConfigurer configurer) throws Exception {
//        configurer
//                .inMemory()
//                .withClient(CLIENT_ID)
////                .secret(CLIENT_SECRET)
//                .authorizedGrantTypes(GRANT_TYPE_PASSWORD)
//                .scopes(SCOPE_READ, SCOPE_WRITE)
//                .accessTokenValiditySeconds(ACCESS_TOKEN_VALIDITY_SECONDS).
//                refreshTokenValiditySeconds(FREFRESH_TOKEN_VALIDITY_SECONDS);
//    }
//
//    @Override
//    public void configure(AuthorizationServerEndpointsConfigurer endpoints) {
//        endpoints.authenticationManager(authenticationManager);
////        endpoints.tokenStore(tokenStore())
////                .authenticationManager(authenticationManager)
////                .accessTokenConverter(accessTokenConverter());
//    }
//
//}
