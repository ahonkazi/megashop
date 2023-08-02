import React, { useEffect, useState } from 'react'
import { NavBarFilter } from '../../Commponents/Navbar/Navbar'
import LayoutProfile from '../../Layout/LayoutProfile'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../Views/CommonViews/Footer'
import axios from 'axios'

const ProfilePage = () => {
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/profile') {
            navigate('details')
        }
    }, [])


    // const [authStatus, SetAuth] = useState(false);
    // useEffect(() => {
    //     let config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'http://127.0.0.1:8000/api/checkauth',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    //         }
    //     };

    //     axios.request(config)
    //         .then((response) => {
    //             if (response.data.status === 200) {
    //                 SetAuth(true)
    //             }
    //         })
    //         .catch((error) => {
    //             SetAuth(false)
    //         });

    // }, []);


    return (
        <>
            <NavBarFilter />
            <LayoutProfile>
                <Outlet />
            </LayoutProfile>
            <Footer />
        </>
    )




}

export default ProfilePage