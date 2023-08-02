import React, { useContext } from 'react'
import { GetContext } from '../../context/Context'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
    const context = useContext(GetContext)
    return (
        <main className={`pt-[55px] ${context.adminSidebarStatus ? 'md:pl-[240px]' : 'md:pl-[69px]'} duration-300 `}>
            <Outlet />
        </main>
    )
}

export default AdminMain