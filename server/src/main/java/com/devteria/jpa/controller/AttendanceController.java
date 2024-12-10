package com.devteria.jpa.controller;

import com.devteria.jpa.dto.response.ApiResponse;
import com.devteria.jpa.dto.response.AttendanceLogResponse;
import com.devteria.jpa.service.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;

    @GetMapping("/{account}")
    public ApiResponse<AttendanceLogResponse> getAttendanceLogs(@PathVariable String account) {
        AttendanceLogResponse response = attendanceService.getAttendanceLogs(account);
        return ApiResponse.<AttendanceLogResponse>builder().result(response).build();
    }
}
