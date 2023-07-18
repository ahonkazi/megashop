import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { GetContext } from '../context/Context'
import style from "./Layout.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Footer from '../Views/CommonViews/Footer'
const LayoutPrimary = ({ children }) => {
    const context = useContext(GetContext)
    return (

        <>
            <div className="container mx-auto pb-[100px] lg:pb-0">
                <div className="flex lg:gap-4">
                    <div className="sidebar hidden lg:block h-[600px] bg-white w-[300px] shrink-0">
                        <ul className='side-menu pt-2'>

                            {
                                context.categories?.map(item =>
                                    <li className={`${style.parent} group relative pb-2 font-Exo`}>
                                        <div className="flex bg-Primary-0 px-4 py-2  cursor-pointer items-center justify-between">
                                            <Link className='text-lg text-white' to={item.path}>{item.title}</Link>
                                            <span className='group-hover:translate-x-2 duration-200'>
                                                <BiChevronRight className='text-white text-lg' />
                                            </span>
                                        </div>

                                        <ul className={`${style.child} absolute z-[100] top-0 text-white left-[100%] bg-Primary-0   w-[250px]`}>
                                            {
                                                item.list.map(subItem =>
                                                    <li className="side-item hover:bg-white duration-300 hover:text-Primary-0 font-Exo">
                                                        <div className="flex  px-4 py-2  cursor-pointer items-center justify-between">
                                                            <Link className='text-lg duration-300' to={subItem.path}>{subItem.title}</Link>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </li>
                                )
                            }

                        </ul>
                    </div>

                    <div className='w-[100%] min-h-screen bg-slate-100'>
                        {children}
                    </div>

                </div>
            </div>

            <Footer />
        </>

    )
}

export default LayoutPrimary