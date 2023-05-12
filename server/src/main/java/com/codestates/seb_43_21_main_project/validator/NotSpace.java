package com.codestates.seb_43_21_main_project.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD) // 해당 애노테이션을 필드에 적용할 수 있도록 지정.
@Retention(RetentionPolicy.RUNTIME) // 해당 애노테이션을 런타임 시에도 유지
@Constraint(validatedBy = {NotSpaceValidator.class}) // 해당 애노테이션을 사용하여 유형성 검사 수행할 때 NotSpaceValidator 클래스를 사용하도록 지정.
public @interface NotSpace {
    String message() default "공백이 아니어야 합니다.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
