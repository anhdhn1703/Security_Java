package com.devteria.jpa.mapper;

import com.devteria.jpa.dto.request.PermissionRequest;
import com.devteria.jpa.dto.request.UserCreationRequest;
import com.devteria.jpa.dto.request.UserUpdateRequest;
import com.devteria.jpa.dto.response.PermissionResponse;
import com.devteria.jpa.dto.response.UserResponse;
import com.devteria.jpa.entity.Permission;
import com.devteria.jpa.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);

    PermissionResponse toPermissionResponse(Permission permission);
}
