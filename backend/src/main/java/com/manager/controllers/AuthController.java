package com.manager.controllers;

import com.manager.configuration.security.TokenProvider;
import com.manager.configuration.security.exceptions.BadRequestException;
import com.manager.configuration.security.payload.ApiResponse;
import com.manager.configuration.security.payload.AuthRequest;
import com.manager.configuration.security.payload.AuthResponse;
import com.manager.configuration.security.payload.LoginRequest;
import com.manager.configuration.security.payload.SignUpRequest;
import com.manager.models.AuthProvider;
import com.manager.models.Role;
import com.manager.models.User;
import com.manager.models.UserProfile;
import com.manager.repositories.RoleRepository;
import com.manager.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

/**
 * controllers and services for handling email and password based login.
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private TokenProvider tokenProvider;

  @Autowired
  private RoleRepository roleRepository;

  @PostMapping("/login")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
    String token = handleAuthentication(loginRequest);
    return ResponseEntity.ok(new AuthResponse(token));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest, HttpServletRequest request) {
    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      throw new BadRequestException("Email address already in use.");
    }

    Role role = roleRepository.findByName("ROLE_USER");
    List<Role> roles = new ArrayList<>();
    roles.add(role);

    UserProfile profile = new UserProfile();
    profile.setFirstName("Mock");
    profile.setLastName("Mock");

    // Creating user's account
    User user = new User();
    user.setUsername(signUpRequest.getUsername());
    user.setEmail(signUpRequest.getEmail());
    user.setPassword(signUpRequest.getPassword());
    user.setProvider(AuthProvider.local);
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRoles(roles);
    user.setUserProfile(profile);

    userRepository.saveAndFlush(user);

    return ResponseEntity
        .ok()
        .body(new ApiResponse(true, "User registered successfully"));
  }

  private String handleAuthentication(AuthRequest authRequest) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            authRequest.getUsername(),
            authRequest.getPassword()
        )
    );

    SecurityContextHolder.getContext().setAuthentication(authentication);

    return tokenProvider.createToken(authentication);
  }

}
