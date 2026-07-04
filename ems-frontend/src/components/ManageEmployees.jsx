import React, { useEffect, useState } from 'react'

import {

    listemployees,
    deleteEmployee

} from '../services/employeeservice'

import { useNavigate }

from 'react-router-dom'

const ManageEmployees = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate()

    useEffect(() => {

        getAllEmployees()

    }, [])

    function getAllEmployees(){

        listemployees()

            .then((response) => {

                setEmployees(response.data)

            })

            .catch(error => {

                console.error(error)
            })
    }

    // UPDATE

    function updateEmp(id){

        const confirmUpdate =

            window.confirm(
                "Do you want to update this employee?"
            )

        if(confirmUpdate){

            navigator(`/update-employee/${id}`)
        }
    }

    // DELETE

    function removeEmp(id){

        const confirmDelete =

            window.confirm(
                "Are you sure you want to delete?"
            )

        if(confirmDelete){

            deleteEmployee(id)

                .then(() => {

                    getAllEmployees()
                })

                .catch(error => {

                    console.error(error)
                })
        }
    }

    return (

        <div>

            {/* TOP SECTION */}

            <div
                className='d-flex
                justify-content-between
                align-items-center
                mb-4'
            >

                <h1 className='page-title'>

                    Manage Employees

                </h1>

                {/* BACK BUTTON */}

                <button
                    className='btn btn-secondary'

                    onClick={() =>
                        navigator('/employees')
                    }
                >
                    Back
                </button>

            </div>

            {/* TABLE */}

            <div className='glass-card'>

                <table
                    className='table
                    table-hover
                    text-center
                    align-middle'
                >

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>First Name</th>

                            <th>Last Name</th>

                            <th>Email</th>

                            <th>Department</th>

                            <th>Salary</th>

                            <th>Phone</th>

                            <th>Actions</th>

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

                                    {/* ACTIONS */}

                                    <td>

                                        {/* UPDATE */}

                                        <button
                                            className='btn btn-info me-2'

                                            onClick={() =>
                                                updateEmp(employee.id)
                                            }
                                        >
                                            Update
                                        </button>

                                        {/* DELETE */}

                                        <button
                                            className='btn btn-danger'

                                            onClick={() =>
                                                removeEmp(employee.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ManageEmployees