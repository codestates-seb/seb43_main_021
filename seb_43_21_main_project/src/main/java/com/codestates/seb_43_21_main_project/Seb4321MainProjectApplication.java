package com.codestates.seb_43_21_main_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing // JPA Auditing 활성화
public class Seb4321MainProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(Seb4321MainProjectApplication.class, args);
	}

}
