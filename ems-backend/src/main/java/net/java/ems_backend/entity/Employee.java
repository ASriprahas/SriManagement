package net.java.ems_backend.entity;

import jakarta.persistence.*;

@Entity

@Table(name = "employees")

public class Employee {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String firstname;

    private String lastname;

    @Column(unique = true)

    private String email;

    private String department;

    private Double salary;

    @Column(unique = true)

    private String phone;

    public Employee() {

    }

    public Employee(Long id,
                    String firstname,
                    String lastname,
                    String email,
                    String department,
                    Double salary,
                    String phone) {

        this.id = id;

        this.firstname = firstname;

        this.lastname = lastname;

        this.email = email;

        this.department = department;

        this.salary = salary;

        this.phone = phone;
    }

    public Long getId() {

        return id;
    }

    public void setId(Long id) {

        this.id = id;
    }

    public String getFirstname() {

        return firstname;
    }

    public void setFirstname(String firstname) {

        this.firstname = firstname;
    }

    public String getLastname() {

        return lastname;
    }

    public void setLastname(String lastname) {

        this.lastname = lastname;
    }

    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {

        this.email = email;
    }

    public String getDepartment() {

        return department;
    }

    public void setDepartment(String department) {

        this.department = department;
    }

    public Double getSalary() {

        return salary;
    }

    public void setSalary(Double salary) {

        this.salary = salary;
    }

    public String getPhone() {

        return phone;
    }

    public void setPhone(String phone) {

        this.phone = phone;
    }
}