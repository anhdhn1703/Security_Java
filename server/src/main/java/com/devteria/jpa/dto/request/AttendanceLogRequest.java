package com.devteria.jpa.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AttendanceLogRequest {
    long id;
    String barcode;
    List<Object> employeeId;
    String punchTime;
    String attendanceDate;
    String localTime;
    List<Object> deviceId;
    String type;
    boolean isFakeAttendanceLog;
    boolean logLated;
    boolean viewOnly;
    boolean requestLogId;
}
