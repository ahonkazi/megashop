import React, { useContext } from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { GetContext } from '../../context/Context'

const Navbar = () => {
    const context = useContext(GetContext)
    return (
        <header className={`relative z-[100]`}>
            <MobileNav />
            <DesktopNav />
        </header>
    )
}

export default Navbar