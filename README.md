# Employee Management System

A full-stack **Employee Management System** developed using **Spring Boot, React, and MySQL**. The application provides a simple interface for managing employee information through RESTful APIs.

## 🚀 Features

* Add new employees
* View employee details
* Update employee information
* Delete employees
* Employee CRUD operations
* RESTful API integration
* MySQL database integration
* React-based frontend
* Spring Data JPA for database operations
* Form validation and error handling

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Router

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

### Database

* MySQL

### Tools

* IntelliJ IDEA
* Visual Studio Code
* Postman
* Git & GitHub

## 🏗️ System Architecture

```text
React Frontend
      |
      | HTTP / REST API
      ↓
Spring Boot Backend
      |
      ├── Controller Layer
      ├── Service Layer
      ├── Repository Layer
      └── Entity Layer
      |
      ↓
    MySQL Database
```

## 📌 Main Modules

### Employee Management

The system supports complete CRUD operations:

* **Create** – Add a new employee
* **Read** – View employee information
* **Update** – Modify employee details
* **Delete** – Remove an employee

## 🗄️ Database

The application uses **MySQL** as the relational database.

Spring Data JPA and Hibernate are used to map Java entities to database tables and perform database operations.

Example employee information can include:

* Employee ID
* Employee Name
* Email
* Department
* Position
* Salary
* Contact Information

## 📂 Project Structure

```text
employee-management-system/
│
├── backend/
│   └── src/
│       └── main/
│           └── java/
│               └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── assets/
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd employee-management-system
```

### 2. Configure MySQL

Create a database in MySQL:

```sql
CREATE DATABASE employee_management;
```

Update the Spring Boot `application.properties` file:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Replace `YOUR_PASSWORD` with your local MySQL password.

### 3. Run the Backend

From the backend directory:

```bash
mvn spring-boot:run
```

### 4. Run the Frontend

From the frontend directory:

```bash
npm install
npm run dev
```

The React application will normally be available at:

```text
http://localhost:5173
```

## 🧪 API Testing

The backend REST APIs can be tested using **Postman**.

Typical operations include:

```text
GET     /api/employees
GET     /api/employees/{id}
POST    /api/employees
PUT     /api/employees/{id}
DELETE  /api/employees/{id}
```

The exact API paths depend on the implementation.

## 🔮 Future Improvements

* Employee search and filtering
* Pagination and sorting
* Employee profile management
* Admin dashboard
* Cloud database integration
* Docker support
* Automated testing
* Deployment to a cloud platform

## 👨‍💻 Author

**Sri Prahas Annambhotla**

B.Tech – Computer Science and Business Systems
VIT-AP University

GitHub: YOUR_GITHUB_PROFILE
LinkedIn: YOUR_LINKEDIN_PROFILE
