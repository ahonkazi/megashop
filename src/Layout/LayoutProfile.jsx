import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiBody, BiCart, BiChevronDown, BiCommentEdit, BiDetail, BiHeart, BiLogOut, BiMessage, BiPlusCircle, BiWallet } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const LayoutProfile = ({ children }) => {
    const links = [
        { title: 'Details', path: 'details', icon: <BiDetail /> },
        { title: 'Message', path: 'message', icon: <BiMessage /> },
        { title: 'Edit', path: 'edit', icon: <BiCommentEdit /> },
        { title: 'WishList', path: 'wishlist', icon: <BiHeart /> },
        { title: 'Payment Config', path: 'payment-setting', icon: <BiWallet /> },
        { title: 'Previous Order', path: 'prev-order', icon: <BiCart /> },
    ]
    const [mobileEnable, setMobileEnable] = useState(false)
    const navigate = useNavigate();
    const handleLogout = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/logout',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            },
        };

        axios.request(config)
            .then((response) => {
                if (response.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.data.message,
                    })
                    navigate('/auth/login');

                }
            })
            .catch((error) => {

                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                })
                navigate('/auth');
            });

    }
    return (
        <section className='mt-[10px]'>
            <div className="container mx-auto">
                <div className="flex gap-4">
                    <div className="profile-sidebar hidden lg:block rounded w-[300px] shrink-0 bg-gray-100 min-h-[500px]">
                        <ul className='flex flex-col gap-1'>
                            {
                                links.map(item =>
                                    <li className='font-Nunito text-gray-700'>
                                        <NavLink to={item.path} className={'flex profileNav items-center gap-2'}>
                                            <p className=' p-3 rounded-r-md shadow1 text-[18px] text-center items-center justify-center bg-gray-50'>
                                                {item.icon}
                                            </p>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            }
                            <li className='font-Nunito text-gray-700'>
                                <button onClick={handleLogout} className={'flex bg-white w-full items-center gap-2'}>
                                    <p className=' p-3 rounded-r-md shadow1 text-[18px] text-center items-center justify-center bg-gray-50'>
                                        <BiLogOut />
                                    </p>
                                    <span>Logout</span>
                                </button>
                            </li>


                        </ul>
                    </div>
                    <div className="w-full bg-white h-fit min-h-[500px] py-4">
                        <div className="profile-topbar bg-gray-50 py-4  lg:hidden rounded  ">

                            <div className="topbar-header md:hidden flex justify-between py-2 px-4">
                                <p className='font-Nunito text-xl text-gray-600'>Menu</p>
                                <button onClick={() => setMobileEnable(!mobileEnable)}> <BiChevronDown className={`${mobileEnable ? 'rotate-180' : ''} duration-300 text-[22px]`} /></button>
                            </div>
                            <AnimatePresence>
                                {
                                    mobileEnable && (
                                        <motion.div initial={{ height: 0 }} exit={{ height: 0 }} animate={{ height: 'auto' }} style={{ overflow: 'clip' }}>
                                            <ul className='flex  md:hidden px-4 gap-1 md:gap-0 mt-[10px] flex-col flex-wrap'>
                                                {
                                                    links.map(item =>
                                                        <li className='font-Nunito text-gray-700'>
                                                            <NavLink to={item.path} className={'flex profileTopNav px-4 py-2  items-center gap-2'}>

                                                                <span>{item.title}</span>
                                                            </NavLink>
                                                        </li>
                                                    )
                                                }
                                                <li className='font-Nunito text-gray-700'>
                                                    <button className={'flex px-4 bg-white w-full py-2  items-center gap-2'}>
                                                        <span>Logout</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                            <ul className='hidden md:flex md:flex-row px-4 gap-1 md:gap-0 mt-[10px] flex-col flex-wrap'>
                                {
                                    links.map(item =>
                                        <li className='font-Nunito text-gray-700'>
                                            <NavLink to={item.path} className={'flex profileTopNav px-4 py-2  items-center gap-2'}>

                                                <span>{item.title}</span>
                                            </NavLink>
                                        </li>
                                    )
                                }
                                <li className='font-Nunito text-gray-700'>
                                    <button className={'flex px-4 bg-white w-full py-2  items-center gap-2'}>
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LayoutProfile