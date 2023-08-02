import React, { useState } from 'react'
import { ButtonBlue } from '../../Commponents/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Signup = () => {

    const [inputData, setInputData] = useState({
        name: '', email: '', password: '', Fname: '', Lname: ''
    })
    const [errorList, setErrorList] = useState([])
    const navigate = useNavigate();
    const handleInput = (e) => {
        setInputData({ ...inputData, [e.target.name]: [e.target.value] })

    }
    let data = {
        name: inputData.Fname + ' ' + inputData.Lname,
        email: inputData.email[0],
        password: inputData.password[0],
    }
    const handleForm = (e) => {
        e.preventDefault();

    }
    const handler = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/register',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                localStorage.setItem('auth_token', response.data.token);
                localStorage.setItem('auth_name', response.data.name);
                Swal.fire('Success', response.data.message, 'success');
                navigate('/profile');

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.errors.email || error.response.data.errors.name || error.response.data.errors.password,
                })
                setErrorList(p => error.response.data.errors)
            });

    }

    return (
        <div className="flex justify-center mt-[10px] md:mt-[60px]">
            <form onSubmit={(e) => handleForm(e)} className='w-full md:w-[600px] rounded-md bg-white flex flex-col gap-2 px-4 py-4'>
                <h2 className="section-title">Create an account</h2>
                <div className="input-group grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                    <input name='Fname' onChange={(e) => handleInput(e)} value={inputData.Fname} type="text" placeholder='First Name...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                    <input name='Lname' onChange={(e) => handleInput(e)} value={inputData.Lname} type="text" placeholder='Last Name...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                </div>
                <div className="input-group grid grid-cols-1  gap-2">
                    <input name='email' onChange={(e) => handleInput(e)} value={inputData.email} type="text" placeholder='Your Email...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                    <input name='password' onChange={(e) => handleInput(e)} value={inputData.password} type="password" placeholder='Password...' className='border border-gray-200 h-[45px]  outline-none px-4 text-gray-600' />
                </div>
                <div className="input-group grid grid-cols-1  gap-2 ">
                    <ButtonBlue refFunction={handler} type='submit'>Register</ButtonBlue>
                </div>
                <p className='text-gray-800 font-Nunito'>Already have an accout? <Link className='text-blue-500' to={'/auth/login'}>Login Here</Link> </p>

            </form>
        </div>

    )


}

export default Signup