import React, { useContext } from 'react'
import { BiCart, BiHomeHeart, BiMenu, BiSearch, BiUser } from 'react-icons/bi'
import style from "./common.module.scss"
import { Link } from 'react-router-dom'
import { GetContext } from '../../context/Context'
const MobileBottomNav = () => {
    const context = useContext(GetContext)
    return (
        <nav className={`${style.mobileBottomNav}   fixed bottom-0 left-0 w-full bg-slate-100`}>
            <div className="">
                <ul className='flex px-8 justify-between h-[50px]  items-center'>

                    <li onClick={() => context.setMobileSidebarStatus(true)} className={`${style.mobileBottomNavItem} `}>
                        <button>
                            <BiMenu />
                        </button>
                        <div className={`${style.tooltip}`}>Menu</div>

                    </li>
                    <li className={`${style.mobileBottomNavItem}`}>
                        <button onClick={() => context.setSearchPanelStatus(true)}>
                            <BiSearch />
                        </button>
                        <div className={`${style.tooltip}`}>Search</div>

                    </li>
                    <li className={`${style.mobileBottomNavItem} ${style.active}`}>
                        <Link to={"/"}>
                            <BiHomeHeart />
                        </Link>
                        <div className={`${style.tooltip}`}>Home</div>
                    </li>
                    <li className={`${style.mobileBottomNavItem}`}>
                        <button onClick={() => context.setMobileCartSlide(true)}>
                            <BiCart />
                        </button>
                        <div className={`${style.tooltip}`}>Cart</div>

                    </li>
                    <li className={`${style.mobileBottomNavItem}`}>
                        <button>
                            <BiUser />
                        </button>
                        <div className={`${style.tooltip}`}>User</div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MobileBottomNav