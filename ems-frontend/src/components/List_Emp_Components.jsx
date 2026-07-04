import React, { useEffect, useState } from 'react'

import { listemployees }

from '../services/employeeservice'

import { useNavigate }

from 'react-router-dom'

const List_Emp_Components = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate()

    useEffect(() => {

        getAllEmployees()

    }, [])

    function getAllEmployees() {

        listemployees()

            .then((response) => {

                setEmployees(response.data)

            })

            .catch(error => {

                console.error(error)

            })
    }

    return (

        <div>

            <div className='d-flex justify-content-between align-items-center mb-4'>

                <h1 className='page-title'>
                    Employees List
                </h1>

                <button
                    className='btn btn-warning'
                    onClick={() =>
                        navigator('/manage-employees')
                    }
                >
                    Manage Employees
                </button>

            </div>

            <div className='glass-card'>

                <table className='table table-hover text-center align-middle'>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>First Name</th>

                            <th>Last Name</th>

                            <th>Email</th>

                            <th>Department</th>

                            <th>Salary</th>

                            <th>Phone</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            employees.map(employee => (

                                <tr key={employee.id}>

                                    <td>{employee.id}</td>

                                    <td>{employee.firstname}</td>

                                    <td>{employee.lastname}</td>

                                    <td>{employee.email}</td>

                                    <td>{employee.department}</td>

                                    <td>
                                        ₹ {employee.salary}
                                    </td>

                                    <td>{employee.phone}</td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default List_Emp_Components