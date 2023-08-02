import React, { useContext } from 'react'
import { GetContext } from '../../context/Context'
import { NavLink } from 'react-router-dom'
import { MdApps, MdBrandingWatermark, MdCategory, MdDrafts, MdLaptopMac, MdList, MdSettingsApplications } from 'react-icons/md'

const AdminSidebar = () => {
    const context = useContext(GetContext)
    const menu = [
        { title: "Dashboard", icon: <MdApps />, path: '/admin/dashboard' },
        { title: "Category", icon: <MdCategory />, path: '/admin/category' },
        { title: "Product", icon: <MdLaptopMac />, path: '/admin/product' },
        { title: "Brand", icon: <MdBrandingWatermark />, path: '/admin/brand' },
        { title: "Order", icon: <MdList />, path: '/admin/order' },
        { title: "Settings", icon: <MdSettingsApplications />, path: '/admin/settings' },
    ]
    return (
        <div className={`border-l-4 border-l-Primary-0 ${context.adminSidebarStatus ? 'w-[240px]  translate-x-0 ' : '-translate-x-full md:translate-x-0  w-[240px] md:w-[69px]'} duration-300 overflow-clip admin-sidebar z-[50] h-full bg-white border-r border-l border-gray-300 fixed left-0 top-0`}>
            <ul className='flex flex-col overflow-hidden h-full pt-[55px]  w-full'>
                {
                    menu.map(item =>
                        <li className='flex'>
                            <NavLink to={item.path} className={'py-3 admin-navlink font-Nunito flex items-center gap-2 px-4 w-full text-slate-800 border-b border-slate-100 hover:bg-slate-100 duration-200'}>
                                <span className='bg-slate-50 rounded shadow2 p-1 text-xl'>{item.icon}</span>
                                <span className={`${context.adminSidebarStatus ? '' : 'md:translate-x-full'} duration-300`}>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>)
}

export default AdminSidebar