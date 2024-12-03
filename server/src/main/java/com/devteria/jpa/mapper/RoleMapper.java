package com.devteria.jpa.mapper;

import com.devteria.jpa.dto.request.PermissionRequest;
import com.devteria.jpa.dto.request.RoleRequest;
import com.devteria.jpa.dto.response.PermissionResponse;
import com.devteria.jpa.dto.response.RoleResponse;
import com.devteria.jpa.entity.Permission;
import com.devteria.jpa.entity.Role;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "permissions", ignore = true)
    Role toRole(RoleRequest request);

    RoleResponse toRoleResponse(Role role);
}
