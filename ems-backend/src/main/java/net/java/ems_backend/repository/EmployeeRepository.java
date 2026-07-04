package net.java.ems_backend.repository;

import net.java.ems_backend.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {

 boolean existsByEmail(String email);

 Employee findByEmail(String email);
}