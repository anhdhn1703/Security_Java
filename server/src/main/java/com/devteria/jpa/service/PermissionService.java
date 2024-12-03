package com.devteria.jpa.service;

import com.devteria.jpa.dto.request.PermissionRequest;
import com.devteria.jpa.dto.response.PermissionResponse;
import com.devteria.jpa.entity.Permission;
import com.devteria.jpa.mapper.PermissionMapper;
import com.devteria.jpa.repository.PermissionRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionService {
    PermissionRepository permissionRepository;
    PermissionMapper permissionMapper;
    public PermissionResponse create(PermissionRequest request){
        Permission permission = permissionMapper.toPermission(request);
        permission = permissionRepository.save(permission);
        return  permissionMapper.toPermissionResponse(permission);
    }
    public List<PermissionResponse> getAll(){
        var permission = permissionRepository.findAll();
        return permission.stream().map(permissionMapper::toPermissionResponse).toList();
    }
    public void delete(String permission){
        permissionRepository.deleteById(permission);
    }
}
