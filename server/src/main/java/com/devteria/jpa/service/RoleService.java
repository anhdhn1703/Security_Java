package com.devteria.jpa.service;

import com.devteria.jpa.dto.request.PermissionRequest;
import com.devteria.jpa.dto.request.RoleRequest;
import com.devteria.jpa.dto.response.PermissionResponse;
import com.devteria.jpa.dto.response.RoleResponse;
import com.devteria.jpa.entity.Permission;
import com.devteria.jpa.mapper.PermissionMapper;
import com.devteria.jpa.mapper.RoleMapper;
import com.devteria.jpa.repository.PermissionRepository;
import com.devteria.jpa.repository.RoleRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class RoleService {
    RoleRepository roleRepository;
    RoleMapper roleMapper;
    PermissionRepository permissionRepository;
    public RoleResponse create(RoleRequest request){
        var role = roleMapper.toRole(request);

        var permission = permissionRepository.findAllById(request.getPermissions());
        role.setPermissions(new HashSet<>(permission));
        role = roleRepository.save(role);
        return  roleMapper.toRoleResponse(role);
    }
    public List<RoleResponse> getAll(){
        var role = roleRepository.findAll();
        return role.stream().map(roleMapper::toRoleResponse).toList();
    }
    public void delete(String role){
        roleRepository.deleteById(role);
    }
}
