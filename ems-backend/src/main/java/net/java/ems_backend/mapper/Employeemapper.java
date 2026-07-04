package net.java.ems_backend.mapper;

import net.java.ems_backend.dto.EmployeeDto;

import net.java.ems_backend.entity.Employee;

public class Employeemapper {

    public static EmployeeDto
    mapToEmployeeDto(Employee employee){

        return new EmployeeDto(

                employee.getId(),

                employee.getFirstname(),

                employee.getLastname(),

                employee.getEmail(),

                employee.getDepartment(),

                employee.getSalary(),

                employee.getPhone()
        );
    }

    public static Employee
    mapToEmployee(EmployeeDto employeeDto){

        return new Employee(

                employeeDto.getId(),

                employeeDto.getFirstname(),

                employeeDto.getLastname(),

                employeeDto.getEmail(),

                employeeDto.getDepartment(),

                employeeDto.getSalary(),

                employeeDto.getPhone()
        );
    }
}