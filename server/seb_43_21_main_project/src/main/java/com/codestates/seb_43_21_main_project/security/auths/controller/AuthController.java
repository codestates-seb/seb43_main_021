package com.codestates.seb_43_21_main_project.security.auths.controller;


import com.codestates.seb_43_21_main_project.security.auths.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

//@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class AuthController {
    private final JwtTokenizer jwtTokenizer;

    @PostMapping("/logout") //헤더에 유효한 jwt 토큰을 함께 전송
    public void logout(HttpServletRequest request) {
    }
}
