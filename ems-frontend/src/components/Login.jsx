import React, { useState } from 'react'

import { useNavigate }

from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const navigator = useNavigate()

    function handleLogin(e){

        e.preventDefault()

        if(

            username === 'sriprahas'

            &&

            password === 'prahas@2005'

        ){

            navigator('/employees')
        }

        else{

            alert('Invalid Credentials')
        }
    }

    return (

        <div className='login-card'>

            <div className='glass-card'>

                <h2 className='text-center mb-4'>

                    Admin Login

                </h2>

                <form onSubmit={handleLogin}>

                    <div className='mb-3'>

                        <label>
                            Username
                        </label>

                        <input
                            type='text'

                            className='form-control'

                            placeholder='Enter Username'

                            value={username}

                            onChange={(e)=>
                                setUsername(e.target.value)
                            }
                        />

                    </div>

                    <div className='mb-3'>

                        <label>
                            Password
                        </label>

                        <input
                            type='password'

                            className='form-control'

                            placeholder='Enter Password'

                            value={password}

                            onChange={(e)=>
                                setPassword(e.target.value)
                            }
                        />

                    </div>

                    <button
                        type='submit'

                        className='btn btn-primary w-100'
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login