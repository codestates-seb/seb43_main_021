package com.codestates.seb_43_21_main_project.security.config;


import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings(CorsRegistry corsRegistry) {
                corsRegistry.addMapping("/**")
                        .allowedOriginPatterns("*")
                        .allowedHeaders("*")
                        .allowedMethods("GET", "POST", "PATCH", "PUT","DELETE")
                        .exposedHeaders("Authorization","RefreshToken","memberId");
                }
        };
    }
}
