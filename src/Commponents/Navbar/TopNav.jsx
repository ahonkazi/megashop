import React from 'react'
import { Link } from 'react-router-dom'
import style from "./common.module.scss"
const TopNav = () => {
    return (

        <div className="top-nav bg-slate-100">
            <div className="shop-container mx-auto
             px-4 md:flex md:items-center md:justify-between">
                <div className="hidden md:block topNavLeft md:w-[160px] lg:w-[240px] xl:w-auto">
                    <p className='overflow-hidden font-Exo text-[14px] text-slate-800 text-ellipsis whitespace-nowrap'>Please Call us to check the Stock before Placing the order!</p>
                </div>
                <div className="top-nav-Textwrapper py-2 font-Exo text-[14px] flex justify-center flex-wrap items-center">
                    <a href="tel:01313386702" className={`${style.topnavText} pl-0 `}><span>Contact:</span> 01313-386702</a>
                    <Link to={""} className={`${style.topnavText} ${style.BorderLeft} `}>FB Page</Link>
                    <Link to={""} className={`${style.topnavText} ${style.BorderLeft} `}>FB Group</Link>
                    <Link to={""} className={`${style.topnavText} pr-0 ${style.BorderLeft} font-medium`}>Pay Now</Link>
                </div>
            </div>
        </div>
    )
}

export default TopNav