package com.codestates.seb_43_21_main_project.security.auths.controller;


import com.codestates.seb_43_21_main_project.security.auths.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



//@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    private final JwtTokenizer jwtTokenizer;

    @PostMapping("/logout") //헤더에 유효한 jwt 토큰을 함께 전송
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        new SecurityContextLogoutHandler().logout(request, response, authentication);
        log.info("로그아웃");
    }
}
