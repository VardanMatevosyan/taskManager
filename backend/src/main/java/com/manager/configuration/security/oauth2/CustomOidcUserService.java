package com.manager.configuration.security.oauth2;

import com.manager.repositories.RoleRepository;
import com.manager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;

public class CustomOidcUserService extends OidcUserRequest {
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private RoleRepository roleRepository;

    public CustomOidcUserService(ClientRegistration clientRegistration, OAuth2AccessToken accessToken, OidcIdToken idToken) {
        super(clientRegistration, accessToken, idToken);
    }
}
