package com.devteria.jpa.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class UserUpdateRequest {

    String password;
    String firstName;
    String lastName;
    String account;
    String department;
    LocalDate dob;
    List<String> roles;

}
