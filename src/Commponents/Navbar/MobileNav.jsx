import React, { useState } from 'react'
import common from "./common.module.scss"
import TopNav from './TopNav'
import { BiCartAlt } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { SearchWrapper } from '../InputFields/InputFields'
import MobileBottomNav from './MobileBottomNav'
import MobileMenuSlide from '../Sidebar/MobileMenuSlide'
import MobileSearchSlide from '../Sidebar/MobileSearchSlide'
import MobileCartSlide from '../Sidebar/MobileCartSlide'
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const [navActive, setNavActive] = useState(false)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }
    )
    return (
        <nav className='mobile-nav md:hidden'>
            <TopNav />
            <div className={`mainNav ${navActive ? 'sticky-nav' : ''} shadow1 bg-white py-3`}>
                <div className="container">
                    <div className="nav-menu flex justify-between items-center">
                        <Link to={"/"} className="logo">
                            <img src="https://www.bdshop.com/pub/media/logo/stores/1/BDSHOP-LOGO-2022.jpg" title="BD SHOP" alt="BD SHOP" width="180" height="34" />
                        </Link>
                        <div className="buttons text-[24px] sm:text-[28px] flex items-center gap-2">
                            <button className={`${common.NavButton}`}> <BiCartAlt /> </button>
                            <button className={`${common.NavButton}`}> <BiUser /></button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <SearchWrapper />
                    </div>
                </div>
            </div>

            <MobileBottomNav />
            <MobileMenuSlide />
            <MobileSearchSlide />
            <MobileCartSlide />
        </nav>
    )
}

export default MobileNav