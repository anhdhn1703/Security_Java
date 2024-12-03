package com.devteria.jpa.validator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.springframework.stereotype.Repository;

import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
        validatedBy = {DobValidator.class}
)
public @interface DobConstraint {
    String message() default "Invalid date of birth";
    int min();

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
