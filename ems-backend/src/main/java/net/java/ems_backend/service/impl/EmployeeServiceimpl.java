package net.java.ems_backend.service.impl;

import lombok.AllArgsConstructor;

import net.java.ems_backend.dto.EmployeeDto;

import net.java.ems_backend.entity.Employee;

import net.java.ems_backend.mapper.Employeemapper;

import net.java.ems_backend.repository.EmployeeRepository;

import net.java.ems_backend.service.EmployeeService;

import org.springframework.stereotype.Service;

import java.util.List;

import java.util.stream.Collectors;

@Service

@AllArgsConstructor

public class EmployeeServiceimpl
        implements EmployeeService {

    private EmployeeRepository employeeRepository;

    // CREATE EMPLOYEE

    @Override
    public EmployeeDto createEmployee(
            EmployeeDto employeeDto) {

        // CHECK DUPLICATE EMAIL

        if(employeeRepository.existsByEmail(
                employeeDto.getEmail())){

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        Employee employee =
                Employeemapper
                        .mapToEmployee(employeeDto);

        Employee savedEmployee =
                employeeRepository.save(employee);

        return Employeemapper
                .mapToEmployeeDto(savedEmployee);
    }

    // GET EMPLOYEE BY ID

    @Override
    public EmployeeDto getEmployeeById(
            Long employeeId) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Employee not found"));

        return Employeemapper
                .mapToEmployeeDto(employee);
    }

    // GET ALL EMPLOYEES

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees =
                employeeRepository.findAll();

        return employees.stream()
                .map(Employeemapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    // UPDATE EMPLOYEE

    @Override
    public EmployeeDto updateEmployee(

            Long employeeId,

            EmployeeDto updatedEmployee) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Employee not found"));

        // CHECK DUPLICATE EMAIL

        Employee existingEmployee =
                employeeRepository.findByEmail(
                        updatedEmployee.getEmail());

        if(existingEmployee != null &&
                !existingEmployee.getId()
                        .equals(employeeId)){

            throw new RuntimeException(
                    "Email already exists"
            );
        }

        employee.setFirstname(
                updatedEmployee.getFirstname());

        employee.setLastname(
                updatedEmployee.getLastname());

        employee.setEmail(
                updatedEmployee.getEmail());

        Employee savedEmployee =
                employeeRepository.save(employee);

        return Employeemapper
                .mapToEmployeeDto(savedEmployee);
    }

    // DELETE EMPLOYEE

    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee =
                employeeRepository.findById(employeeId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Employee not found"));

        employeeRepository.deleteById(employeeId);
    }
}