import React, { useContext, useState } from 'react'
import { MdClose } from 'react-icons/md'

import style from "./mobile.module.scss"
import { GetContext } from '../../context/Context'
import { BiChevronDown } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
const MobileMenuSlide = () => {
    const context = useContext(GetContext)
    const [categoryActive, setCategoryActive] = useState(0)
    return (
        <menu className={`${style.mobileMenuSlideLeft} ${context.mobileSidebarStatus ? 'opacity-100' : 'opacity-0 pointer-events-none'}  duration-300 delay-75  h-full w-full bg-black bg-opacity-50 fixed top-0 left-0`}>
            <div className={`${style.sidebarWrapper} ${context.mobileSidebarStatus ? 'translate-x-0' : '-translate-x-full'} duration-300  relative w-[270px] sm:w-[400px] h-full bg-white`}>
                <button onClick={() => context.setMobileSidebarStatus(false)} className={`${style.closeBtn} ${context.mobileSidebarStatus ? 'left-full' : 'right-0'} bg-Primary-0 text-lg text-slate-800 absolute  p-2`}> <MdClose /> </button>
                <div className="category-wrapper">
                    <div className="category-header flex justify-center items-center py-3">
                        <img class="img-fluid" src="https://www.bdshop.com/pub/media/logo/stores/1/BDSHOP-LOGO-2022.jpg" alt="BD SHOP" width="180" height="34" />
                    </div>
                    <div className="category-body pt-6 ">
                        <ul className="category-menu font-Montserrat">
                            {
                                context.categories?.map((item, index) =>
                                    <li className="category-dropdown">
                                        <div onClick={() => { (categoryActive === (index + 1)) ? setCategoryActive(0) : setCategoryActive(index + 1) }} className={`dropdown-header cursor-pointer flex items-center border-b border-slate-500 py-2 justify-between px-4`}>
                                            <div className="left font-medium">
                                                <Link to={item.path}>{item.title}</Link>
                                            </div>
                                            <div className="right-icon text-lg">
                                                <BiChevronDown className={`${(categoryActive === (index + 1)) ? 'rotate-180' : ''} duration-300`} />
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {

                                                (categoryActive === index + 1) &&
                                                (
                                                    <motion.div style={{ overflow: "clip" }} initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>

                                                        <ul className="category-dropdown-item">
                                                            {

                                                                item.list.map(subItem =>
                                                                    <li className="cursor-pointer  border-b border-slate-500  flex items-center py-1.5 justify-between px-4">
                                                                        <div className="left pl-4">
                                                                            <Link to={subItem.path}>{subItem.title}</Link>
                                                                        </div>
                                                                    </li>

                                                                )
                                                            }
                                                        </ul>


                                                    </motion.div>
                                                )
                                            }
                                        </AnimatePresence>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default MobileMenuSlide