package com.codestates.seb_43_21_main_project.security.config;


import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;


public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:3000/")
                .allowedMethods("GET", "POST", "PATCH", "PUT","DELETE")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3000);
    }
}
