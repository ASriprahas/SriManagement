import React from 'react'

import { useNavigate }

from 'react-router-dom'

const SideBarComp = () => {

    const navigator = useNavigate()

    function logout(){

        const confirmLogout =

            window.confirm(
                "Are you sure you want to logout?"
            )

        if(confirmLogout){

            localStorage.removeItem(
                "loggedIn"
            )

            navigator('/login')
        }
    }

    return (

        <div className='sidebar'>

            <h2>

                EMS <br />

                Dashboard

            </h2>

            <div
                className='sidebar-item'
                onClick={() =>
                    navigator('/employees')
                }
            >
                Employees
            </div>

            <div
                className='sidebar-item'
                onClick={() =>
                    navigator('/add-employee')
                }
            >
                Add Employee
            </div>

            <div
                className='sidebar-item'
                onClick={logout}
            >
                Logout
            </div>

        </div>
    )
}

export default SideBarComp