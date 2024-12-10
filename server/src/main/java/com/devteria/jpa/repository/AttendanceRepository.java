package com.devteria.jpa.repository;

import com.devteria.jpa.entity.AttendanceLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendanceRepository extends JpaRepository<AttendanceLog, Long> {
    @Query("SELECT a FROM AttendanceLog a WHERE a.user.account = :account")
    List<AttendanceLog> findByUserAccount(@Param("account") String account);
}