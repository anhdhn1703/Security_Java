package com.devteria.jpa.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AttendanceLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String barcode;
    String punchTime;
    String attendanceDate;
    String localTime;
    String type;
    boolean isFakeAttendanceLog;
    boolean logLated;
    boolean viewOnly;
    boolean requestLogId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "device_id")
    Device device;
}
