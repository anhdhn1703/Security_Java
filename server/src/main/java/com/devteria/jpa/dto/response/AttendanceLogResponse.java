package com.devteria.jpa.dto.response;

import com.devteria.jpa.dto.request.AttendanceLogRequest;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AttendanceLogResponse {
    Long id;
    List<AttendanceLogRequest> result;
}
