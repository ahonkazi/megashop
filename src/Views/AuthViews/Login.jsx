import React, { useContext, useEffect, useState } from 'react'
import { ButtonBlue } from '../../Commponents/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { GetContext } from '../../context/Context'
const Login = () => {

    const [inputField, setInputField] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }
    const [errorList, setErrorList] = useState([])

    const handleSubmit = () => {

        let data = {
            'email': inputField.email,
            'password': inputField.password
        }
        console.log(data)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/login',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {


                console.log(response.data)
                if (response.data.status === 401) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: response.data.message,
                    })
                } else {
                    localStorage.setItem('auth_token', response.data.token);
                    localStorage.setItem('auth_name', response.data.name);
                    Swal.fire('Success', response.data.message, 'success');
                    navigate('/profile');
                }

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.errors.email || error.response.data.errors.password,
                })
                setErrorList(p => error.response.data.errors)
            });

    }

    return (
        <div className="flex justify-center mt-[10px] md:mt-[100px]">
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-[450px] rounded-md bg-white flex flex-col gap-2 px-4 py-4'>
                <h2 className="section-title">Welcome Back</h2>

                <div className="input-group grid grid-cols-1  gap-2 ">
                    <input name='email' onChange={(e) => handleChange(e)} value={inputField.email} type="email" placeholder='Your Email...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                    <input name='password' onChange={(e) => handleChange(e)} value={inputField.password} type="password" placeholder='Password...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                </div>
                <div className="input-group flex gap-2 items-center ">
                    <input type="checkbox" className='h-[45px]' />
                    <p className='text-gray-600'>Remember me</p>
                </div>

                <div className="input-group grid grid-cols-1  gap-2 ">
                    <ButtonBlue refFunction={handleSubmit}>Login</ButtonBlue>
                </div>
                <p className='text-gray-800 font-Nunito'>Don't have an accout? <Link className='text-blue-500' to={'/auth/signup'}>Register Here</Link> </p>

            </form>
        </div>

    )


}

export default Login