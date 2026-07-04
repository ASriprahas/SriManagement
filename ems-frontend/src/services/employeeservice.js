import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

// GET ALL EMPLOYEES

export const listemployees = () =>
    axios.get(REST_API_BASE_URL)

// CREATE EMPLOYEE

export const createEmployee = (employee) =>
    axios.post(REST_API_BASE_URL, employee)

// GET EMPLOYEE BY ID

export const getEmployee = (employeeId) =>
    axios.get(REST_API_BASE_URL + '/' + employeeId)

// UPDATE EMPLOYEE

export const updateEmployee = (employeeId, employee) =>
    axios.put(REST_API_BASE_URL + '/' + employeeId, employee)

// DELETE EMPLOYEE

export const deleteEmployee = (employeeId) =>
    axios.delete(REST_API_BASE_URL + '/' + employeeId)