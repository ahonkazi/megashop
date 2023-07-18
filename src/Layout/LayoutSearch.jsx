import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight, BiStar } from 'react-icons/bi'
import { GetContext } from '../context/Context'
import style from "./Layout.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Footer from '../Views/CommonViews/Footer'
import { ButtonOutLinePrimary } from '../Commponents/Button/Button'
import { MdStar, MdStarRate } from 'react-icons/md'
import { RatingCard } from '../Commponents/Card/Card'
const LayoutSearch = ({ children }) => {
    const context = useContext(GetContext)
    return (

        <>
            <div className="container mx-auto pb-[100px] lg:pb-0">
                <div className="box bg-white my-4 flex justify-between items-start py-4 px-4">
                    <p className='font-Nunito flex items-center gap-1'>
                        <Link className='text-gray-700' to={'/'}>Home</Link>
                        <BiChevronRight className='text-gray-500' />
                        <span className='text-gray-500'> Search</span>
                    </p>
                </div>
                <div className="flex lg:gap-4">
                    <div className="sidebar px-4 py-4 hidden lg:block min-h-[600px] bg-white w-[300px] shrink-0">
                        <div className="filter-item py-2 font">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Category
                            </p>
                            <ul className='text-sm mt-3 text-gray-600'>
                                {
                                    [...new Array(7)].map(item =>
                                        <li><Link className='hover:text-Primary-0 duration-200 font-semibold' to={'/search?q=girl shoes'}>Girl Shoes</Link></li>
                                    )
                                }

                                <li><button className='text-Primary-0 duration-200 font-semibold'>View More</button></li>

                            </ul>
                        </div>
                        <div className="filter-item border-t py-2 font">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Brand
                            </p>
                            <ul className='text-sm mt-3 text-gray-600'>
                                {
                                    [...new Array(7)].map(item =>
                                        <li className='select-none text-gray-700 flex items-center gap-2'>

                                            <input type="checkbox" name="" className='text-Primary-0' id="" />
                                            <span>Grammen check</span>
                                        </li>
                                    )
                                }
                                <li><button className='text-Primary-0 duration-200 font-semibold'>View More</button></li>

                            </ul>
                        </div>
                        <div className="filter-item py-2 border-t font-Nunito">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Service
                            </p>
                            <ul className='text-sm mt-3 text-gray-600'>
                                {
                                    [...new Array(3)].map(item =>
                                        <li className='select-none text-gray-700 flex items-center gap-2'>
                                            <input type="checkbox" name="" className='text-Primary-0' id="" />
                                            <span>Cash On Delivery</span>
                                        </li>
                                    )
                                }
                                <li><button className='text-Primary-0 duration-200 font-semibold'>View More</button></li>

                            </ul>
                        </div>
                        <div className="filter-item py-2 border-t font-Nunito">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Location
                            </p>
                            <ul className='text-sm mt-3 text-gray-600'>


                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>China</span>
                                </li>
                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>Bangladesh</span>
                                </li>
                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>India</span>
                                </li>


                                <li><button className='text-Primary-0 duration-200 font-semibold'>View More</button></li>

                            </ul>
                        </div>
                        <div className="filter-item py-2 border-t font-Nunito">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Price
                            </p>

                            <div className="flex gap-1 items-center">
                                <input type="tel" placeholder='max' className='border outline-none px-2 border-Primary-0 bg-transparent w-[55px] h-[35px]' />
                                -
                                <input type="tel" placeholder='min' className='border outline-none px-2 border-Primary-0 bg-transparent w-[55px] h-[35px]' />
                                <button className='bg-Primary-0 border-none outline-none px-2 h-[35px] text-white'>Send</button>
                            </div>
                        </div>
                        <div className="filter-item py-2 border-t font-Nunito">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Rating
                            </p>
                            <ul className='text-sm flex flex-col-reverse text-gray-600'>

                                {
                                    [...new Array(5)].map((item, index) =>
                                        <li className='flex gap-1 items-center text-Primary-0 text-lg'>
                                            <RatingCard rating={index + 1} />
                                        </li>
                                    )
                                }



                            </ul>
                        </div>
                        <div className="filter-item py-2 border-t font-Nunito">
                            <p className="filter-title py-2 font-Exo text-gray-800 text-base font-medium">
                                Color Family
                            </p>
                            <ul className='text-sm mt-3 text-gray-600'>


                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>Pink</span>
                                </li>
                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>Orange</span>
                                </li>
                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>Red</span>
                                </li>
                                <li className='select-none text-gray-700 flex items-center gap-2'>
                                    <input type="checkbox" name="" className='text-Primary-0' id="" />
                                    <span>Green</span>
                                </li>


                                <li><button className='text-Primary-0 duration-200 font-semibold'>View More</button></li>

                            </ul>
                        </div>
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

export default LayoutSearch