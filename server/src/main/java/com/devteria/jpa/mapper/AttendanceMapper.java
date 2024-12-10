package com.devteria.jpa.mapper;

import com.devteria.jpa.dto.request.AttendanceLogRequest;
import com.devteria.jpa.dto.response.AttendanceLogResponse;
import com.devteria.jpa.entity.AttendanceLog;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class AttendanceMapper {

    public AttendanceLogRequest toDto(AttendanceLog log) {
        return AttendanceLogRequest.builder()
                .id(log.getId())
                .barcode(log.getBarcode())
                .employeeId(Arrays.asList(
                        log.getUser().getId(),
                        String.format("%s %s (%s)",
                                log.getUser().getFirstName(),
                                log.getUser().getLastName(),
                                log.getUser().getDepartment())
                ))
                .punchTime(log.getPunchTime())
                .attendanceDate(log.getAttendanceDate())
                .localTime(log.getLocalTime())
                .deviceId(Arrays.asList(
                        log.getDevice().getId(),
                        log.getDevice().getName()
                ))
                .type(log.getType())
                .isFakeAttendanceLog(log.isFakeAttendanceLog())
                .logLated(log.isLogLated())
                .viewOnly(log.isViewOnly())
                .requestLogId(log.isRequestLogId())
                .build();
    }

    public List<AttendanceLogRequest> toDtoList(List<AttendanceLog> logs) {
        return logs.stream().map(this::toDto).collect(Collectors.toList());
    }
}
