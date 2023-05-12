package com.codestates.seb_43_21_main_project.validator;

import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class NotSpaceValidator implements ConstraintValidator<NotSpace, String> {
    @Override
    public void initialize(NotSpace constraintAnnotation) { //유효성 검사 초기화. 초기화를 위한 로직 없으므로 상위 클래스 메서드 호출
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) { // 주어진 문자열이 공백이 아닌지 검증. 공백이면 false 아니면 true
        return value == null || StringUtils.hasText(value);
    }
}
