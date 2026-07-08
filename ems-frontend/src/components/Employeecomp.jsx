import React, { useEffect, useState } from 'react'

import {

    createEmployee,
    getEmployee,
    updateEmployee

} from '../services/employeeservice'

import {

    useNavigate,
    useParams

} from 'react-router-dom'

const EmployeeComp = () => {

    const [firstname, setFirstname] = useState('')

    const [lastname, setLastname] = useState('')

    const [email, setEmail] = useState('')

    const [department, setDepartment] = useState('')

    const [salary, setSalary] = useState('')

    const [phone, setPhone] = useState('')

    const [errors, setErrors] = useState({})

    const navigator = useNavigate()

    const { id } = useParams()

    useEffect(() => {

        if(id){

            getEmployee(id)

                .then((response) => {

                    setFirstname(response.data.firstname)

                    setLastname(response.data.lastname)

                    setEmail(response.data.email)

                    setDepartment(response.data.department)

                    setSalary(response.data.salary)

                    setPhone(response.data.phone)
                })

                .catch(error => {

                    console.error(error)
                })
        }

    }, [id])

    // VALIDATE FORM

    function validateForm(){

        let valid = true

        const errorsCopy = {}

        // FIRST NAME

        if(firstname.trim() === ''){

            errorsCopy.firstname =
                'First name is required'

            valid = false
        }

        // LAST NAME

        if(lastname.trim() === ''){

            errorsCopy.lastname =
                'Last name is required'

            valid = false
        }

        // EMAIL

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!emailPattern.test(email)){

            errorsCopy.email =
                'Enter valid email address'

            valid = false
        }

        // PHONE

        const phonePattern =
            /^[0-9]{10}$/

        if(!phonePattern.test(phone)){

            errorsCopy.phone =
                'Phone number must contain 10 digits'

            valid = false
        }

        // DEPARTMENT

        if(department.trim() === ''){

            errorsCopy.department =
                'Department is required'

            valid = false
        }

        // SALARY

        if(salary === '' || salary <= 0){

            errorsCopy.salary =
                'Enter valid salary'

            valid = false
        }

        setErrors(errorsCopy)

        return valid
    }

    // SAVE OR UPDATE

    function saveOrUpdateEmployee(e){

        e.preventDefault()

        if(!validateForm()){

            return
        }

        const employee = {

            firstname,
            lastname,
            email,
            department,
            salary,
            phone
        }

        // UPDATE

        if(id){

            updateEmployee(id, employee)

                .then(() => {

                    navigator('/employees')
                })

                .catch(error => {

                    alert(

                        error.response?.data ||

                        "Duplicate email or phone"
                    )
                })
        }

        // CREATE

        else{

            createEmployee(employee)

                .then(() => {

                    navigator('/employees')
                })

                .catch(error => {

                    alert(

                        error.response?.data ||

                        "Duplicate email or phone"
                    )
                })
        }
    }

    // PAGE TITLE

    function pageTitle(){

        if(id){

            return(

                <h2 className='page-title'>
                    Update Employee
                </h2>
            )

        }else{

            return(

                <h2 className='page-title'>
                    Add Employee
                </h2>
            )
        }
    }

    return (

        <div>

            {/* TITLE + BACK BUTTON */}

            <div className='d-flex justify-content-between align-items-center mb-4'>

                {pageTitle()}

                <button
                    className='btn btn-secondary'

                    onClick={() =>
                        navigator('/employees')
                    }
                >
                    Back
                </button>

            </div>

            <div className='row justify-content-center'>

                <div className='col-md-7'>

                    <div className='glass-card'>

                        <form>

                            {/* FIRST NAME */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    First Name
                                </label>

                                <input
                                    type='text'

                                    className='form-control'

                                    placeholder='Enter First Name'

                                    value={firstname}

                                    onChange={(e)=>
                                        setFirstname(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.firstname}

                                </div>

                            </div>

                            {/* LAST NAME */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    Last Name
                                </label>

                                <input
                                    type='text'

                                    className='form-control'

                                    placeholder='Enter Last Name'

                                    value={lastname}

                                    onChange={(e)=>
                                        setLastname(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.lastname}

                                </div>

                            </div>

                            {/* EMAIL */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    Email Address
                                </label>

                                <input
                                    type='email'

                                    className='form-control'

                                    placeholder='Enter Email Address'

                                    value={email}

                                    onChange={(e)=>
                                        setEmail(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.email}

                                </div>

                            </div>

                            {/* DEPARTMENT */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    Department
                                </label>

                                <input
                                    type='text'

                                    className='form-control'

                                    placeholder='Enter Department'

                                    value={department}

                                    onChange={(e)=>
                                        setDepartment(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.department}

                                </div>

                            </div>

                            {/* SALARY */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    Salary
                                </label>

                                <input
                                    type='number'

                                    className='form-control'

                                    placeholder='Enter Salary'

                                    value={salary}

                                    onChange={(e)=>
                                        setSalary(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.salary}

                                </div>

                            </div>

                            {/* PHONE */}

                            <div className='mb-3'>

                                <label className='form-label'>
                                    Phone Number
                                </label>

                                <input
                                    type='text'

                                    className='form-control'

                                    placeholder='Enter Phone Number'

                                    value={phone}

                                    onChange={(e)=>
                                        setPhone(
                                            e.target.value
                                        )
                                    }
                                />

                                <div className='text-danger mt-1'>

                                    {errors.phone}

                                </div>

                            </div>

                            {/* SUBMIT BUTTON */}

                            <button
                                className='btn btn-primary w-100'

                                onClick={saveOrUpdateEmployee}
                            >
                                Submit
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EmployeeComp