package com.manager.configuration.security.payload;

public interface AuthRequest {
  String getUsername();

  void setUsername(String username);

  String getPassword();

  void setPassword(String password);
}
