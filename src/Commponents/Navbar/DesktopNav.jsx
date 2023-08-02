import React, { useContext, useState } from 'react'
import TopNav from './TopNav'
import { SearchWrapper } from '../InputFields/InputFields'
import { BiCartAlt, BiCategory, BiChevronRight, BiHeart, BiUser } from 'react-icons/bi'
import common from "./common.module.scss"
import CategoryBar from './CategoryBar'
import { Link } from 'react-router-dom'
import { GetContext } from '../../context/Context'
import style from "./desktop.module.scss"
const DesktopNav = () => {
    const [navActive, setNavActive] = useState(false)
    const context = useContext(GetContext)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }
    )
    const [categoryNavActive, SetcategoryNavActive] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            SetcategoryNavActive(true)
        } else {
            SetcategoryNavActive(false)
        }
    }



    )
    return (
        <nav className='hidden md:block'>
            <TopNav />
            <div className={`mainNav ${navActive ? 'sticky-nav' : ''} bg-white py-4`}>
                <div className="container mx-auto">
                    <div className="navWrapper gap-[50px] flex justify-between items-center">
                        <Link to={"/"} className="logo  shrink-0">
                            <img className='w-[180px]' src="https://www.bdshop.com/pub/media/logo/stores/1/BDSHOP-LOGO-2022.jpg" title="BD SHOP" alt="BD SHOP" />
                        </Link>
                        <SearchWrapper />
                        <div className="right-icons shrink-0 xl:pl-[100px]">
                            <div className="buttons text-[28px] flex items-center gap-3">

                                <Link to={'/checkout'} className={`${common.NavButton}`}> <BiCartAlt /></Link>
                                <Link to={'/profile/wishlist'} className={`${common.NavButton}`}> <BiHeart /> </Link>
                                <Link to={'/profile'} className={`${common.NavButton}`}> <BiUser /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container mx-auto ${categoryNavActive ? '' : 'hidden'}`}>

                    <li className={`'${style.categoryButton} group lg:pr-[140px] relative py-2.5  font-Exo cursor-pointer font-medium text-slate-800 text-[15px] gap-2 flex items-center mr-2`}>
                        <BiCategory />
                        <p>Search By Category</p>


                        <div className={`absolute opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto ${style.searchByCategoryWrapper}  top-full left-0 bg-white max-h-[80vh] w-[300px]`}>
                            <ul className="category-menu font-Montserrat">

                                {
                                    context.categories?.map(item =>
                                        <li className={`${style.categoryDropdown} relative `}>
                                            <div className={`dropdown-header hover:bg-Primary-0 hover:text-white duration-300 cursor-pointer flex items-center  py-2 justify-between px-4`}>
                                                <div className="left font-medium">
                                                    <Link to={item.path}>{item.title}</Link>
                                                </div>
                                                <div className="right-icon text-lg">
                                                    <BiChevronRight className={`duration-300`} />
                                                </div>
                                            </div>


                                            <ul className={`${style.categoryDropdownItem} z-[100] w-[300px] absolute  left-full top-0 bg-white`}>
                                                {

                                                    item.list.map(subItem =>
                                                        <li className="cursor-pointer hover:text-Primary-0 duration-300 border-b border-slate-500  flex items-center py-2 justify-between px-4">
                                                            <div className="left pl-4">
                                                                <Link to={subItem.path}>{subItem.title}</Link>
                                                            </div>
                                                        </li>

                                                    )
                                                }
                                            </ul>



                                        </li>)
                                }

                            </ul>
                        </div>
                    </li>
                </div>
            </div>

            {/* category bar */}
            <CategoryBar />
        </nav>
    )
}

export default DesktopNav


export const DesktopNavFilter = () => {
    const [navActive, setNavActive] = useState(false)
    const context = useContext(GetContext)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }
    )
    const [categoryNavActive, SetcategoryNavActive] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            SetcategoryNavActive(true)
        } else {
            SetcategoryNavActive(false)
        }
    }



    )
    return (
        <nav className='hidden md:block'>
            <TopNav />
            <div className={`mainNav ${navActive ? 'sticky-nav' : ''} bg-white py-4`}>
                <div className="container mx-auto">
                    <div className="navWrapper gap-[50px] flex justify-between items-center">
                        <Link to={"/"} className="logo  shrink-0">
                            <img className='w-[180px]' src="https://www.bdshop.com/pub/media/logo/stores/1/BDSHOP-LOGO-2022.jpg" title="BD SHOP" alt="BD SHOP" />
                        </Link>
                        <SearchWrapper />
                        <div className="right-icons shrink-0 xl:pl-[100px]">
                            <div className="buttons text-[28px] flex items-center gap-3">
                                <Link to={'/checkout'} className={`${common.NavButton}`}> <BiCartAlt /></Link>
                                <Link to={'/profile/wishlist'} className={`${common.NavButton}`}> <BiHeart /> </Link>
                                <Link to={'/profile'} className={`${common.NavButton}`}> <BiUser /></Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container mx-auto ${categoryNavActive ? '' : 'hidden'}`}>

                    <li className={`'${style.categoryButton} group lg:pr-[140px] relative py-2.5  font-Exo cursor-pointer font-medium text-slate-800 text-[15px] gap-2 flex items-center mr-2`}>
                        <BiCategory />
                        <p>Search By Category</p>


                        <div className={`absolute opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto ${style.searchByCategoryWrapper}  top-full left-0 bg-white max-h-[80vh] w-[300px]`}>
                            <ul className="category-menu font-Montserrat">

                                {
                                    context.categories?.map(item =>
                                        <li className={`${style.categoryDropdown} relative `}>
                                            <div className={`dropdown-header hover:bg-Primary-0 hover:text-white duration-300 cursor-pointer flex items-center  py-2 justify-between px-4`}>
                                                <div className="left font-medium">
                                                    <Link to={item.path}>{item.title}</Link>
                                                </div>
                                                <div className="right-icon text-lg">
                                                    <BiChevronRight className={`duration-300`} />
                                                </div>
                                            </div>


                                            <ul className={`${style.categoryDropdownItem} z-[100] w-[300px] absolute  left-full top-0 bg-white`}>
                                                {

                                                    item.list.map(subItem =>
                                                        <li className="cursor-pointer hover:text-Primary-0 duration-300 border-b border-slate-500  flex items-center py-2 justify-between px-4">
                                                            <div className="left pl-4">
                                                                <Link to={subItem.path}>{subItem.title}</Link>
                                                            </div>
                                                        </li>

                                                    )
                                                }
                                            </ul>



                                        </li>)
                                }

                            </ul>
                        </div>
                    </li>
                </div>
            </div>

            {/* category bar */}
            <CategoryBar activeAlways={true} />
        </nav>
    )
}
