package com.devteria.jpa.repository;

import com.devteria.jpa.entity.Permission;
import com.devteria.jpa.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,String> {
}
