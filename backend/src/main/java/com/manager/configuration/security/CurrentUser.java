package com.manager.configuration.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import java.lang.annotation.*;

@Target({ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@AuthenticationPrincipal
/**
 * This is a meta-annotation that can be used to inject the currently authenticated user principal in the controllers.
 */
public @interface CurrentUser {

}