import React, { useContext, useEffect } from 'react'
import { BiBell, BiChat, BiMenu, BiUserCircle } from 'react-icons/bi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import { GetContext } from '../../context/Context'
import { MdApps } from 'react-icons/md'
import AdminSidebar from '../components/AdminSidebar'
import AdminMain from '../components/AdminMain'
const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/admin/dashboard')
    }, []);


    return (
        <>
            <AdminHeader />
            <AdminSidebar />
            <AdminMain />

        </>
    )
}

export default Layout