package com.devteria.jpa.service;

import com.devteria.jpa.dto.request.AttendanceLogRequest;
import com.devteria.jpa.dto.response.AttendanceLogResponse;
import com.devteria.jpa.entity.AttendanceLog;
import com.devteria.jpa.mapper.AttendanceMapper;
import com.devteria.jpa.repository.AttendanceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    private final AttendanceMapper attendanceMapper;

    public AttendanceLogResponse getAttendanceLogs(String account) {
        List<AttendanceLog> logs = attendanceRepository.findByUserAccount(account);
        return AttendanceLogResponse.builder()
                .id(906756125L)
                .result(attendanceMapper.toDtoList(logs))
                .build();
    }
}