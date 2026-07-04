package net.java.ems_backend.controller;

import lombok.AllArgsConstructor;

import net.java.ems_backend.dto.EmployeeDto;

import net.java.ems_backend.service.EmployeeService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")

@AllArgsConstructor

@RestController

@RequestMapping("/api/employees")

public class EmployeeController {

    private EmployeeService employeeService;

    // CREATE EMPLOYEE

    @PostMapping

    public ResponseEntity<?> createEmployee(

            @RequestBody EmployeeDto employeeDto){

        try{

            EmployeeDto savedEmployee =

                    employeeService
                            .createEmployee(employeeDto);

            return ResponseEntity.ok(savedEmployee);

        }catch(RuntimeException e){

            return ResponseEntity

                    .status(400)

                    .body(e.getMessage());
        }
    }

    // GET EMPLOYEE BY ID

    @GetMapping("{id}")

    public ResponseEntity<EmployeeDto>
    getEmployeeById(

            @PathVariable("id")
            Long employeeId){

        EmployeeDto employeeDto =

                employeeService
                        .getEmployeeById(employeeId);

        return ResponseEntity.ok(employeeDto);
    }

    // GET ALL EMPLOYEES

    @GetMapping

    public ResponseEntity<List<EmployeeDto>>
    getAllEmployees(){

        List<EmployeeDto> employees =

                employeeService.getAllEmployees();

        return ResponseEntity.ok(employees);
    }

    // UPDATE EMPLOYEE

    @PutMapping("{id}")

    public ResponseEntity<?> updateEmployee(

            @PathVariable("id")
            Long employeeId,

            @RequestBody
            EmployeeDto updatedEmployee){

        try{

            EmployeeDto employeeDto =

                    employeeService.updateEmployee(
                            employeeId,
                            updatedEmployee);

            return ResponseEntity.ok(employeeDto);

        }catch(RuntimeException e){

            return ResponseEntity

                    .status(400)

                    .body(e.getMessage());
        }
    }

    // DELETE EMPLOYEE

    @DeleteMapping("{id}")

    public ResponseEntity<String>
    deleteEmployee(

            @PathVariable("id")
            Long employeeId){

        employeeService.deleteEmployee(employeeId);

        return ResponseEntity.ok(
                "Employee deleted successfully");
    }
}