import React, { useContext } from 'react'
import { BiBell, BiChat, BiMenu, BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { GetContext } from '../../context/Context'
const AdminHeader = () => {

    const context = useContext(GetContext)
    return (
        <header className='h-[55px] z-[100] fixed top-0 left-0 border-b border-b-gray-100 w-full border-l-4 border-Primary-0 flex items-center shadow1 bg-white'>
            <div className="admin-container w-full">
                <nav className="flex justify-between">
                    <div className="header-left flex gap-2 items-center">
                        <button onClick={() => context.setAdminSidebarStatus(!context.adminSidebarStatus)}><BiMenu className='text-4xl text-Primary-0 ' /></button>
                        <Link to='/admin/dashboard'>
                            <img className='h-[30px]' src="https://www.bdshop.com/pub/media/logo/stores/1/BDSHOP-LOGO-2022.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="header-right flex gap-4 items-center">
                        <button><BiBell className='text-2xl text-slate-800' /></button>
                        <button><BiChat className='text-2xl text-slate-800' /></button>
                        <button><BiUserCircle className='text-2xl text-slate-800' /></button>
                    </div>
                </nav>
            </div>
        </header>)
}

export default AdminHeader