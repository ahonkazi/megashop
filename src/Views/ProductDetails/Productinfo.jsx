import React from 'react'
import Breadcrumbs from '../CommonViews/Breadcrumbs'
import photo from '../../assets/images/Product/hand-gripper.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BiRocket, BiStar } from 'react-icons/bi'
import { ButtonDownload, ButtonOutLinePrimary } from '../../Commponents/Button/Button'
import { Link } from 'react-router-dom'

const Productinfo = () => {
    return (
        <section >
            <Breadcrumbs />
            <div className="container mx-auto md:px-4">
                <div className="bg-white flex flex-wrap">
                    <div className="img-slider w-full px-4 md:w-[35%]">
                        <div className="img-wrapper">
                            <img src={photo} alt="" />
                        </div>

                        <div className="img-slider flex gap-1" >
                            <div className="h-[50px] w-[50px] cursor-pointer border">
                                <img className='h-full w-full' src={photo} alt="" />
                            </div>
                            <div className="h-[50px] w-[50px] cursor-pointer border">
                                <img className='h-full w-full' src={photo} alt="" />
                            </div>
                            <div className="h-[50px] w-[50px] cursor-pointer border">
                                <img className='h-full w-full' src={photo} alt="" />
                            </div>
                            <div className="h-[50px] w-[50px] cursor-pointer border">
                                <img className='h-full w-full' src={photo} alt="" />
                            </div>
                            <div className="h-[50px] w-[50px] cursor-pointer border">
                                <img className='h-full w-full' src={photo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="photo-details w-full md:w-[60%] lg:w-[40%] py-4 font-Nunito px-4">
                        <div className="border-b border-gray-100 pb-[10px]">
                            <h2 className="text-gray-800 text-xl ">6-50Kg Adjustable Heavy Grips Hand Gripper Gym Power Fitness Hand Exerciser Grip</h2>
                            <p className='flex items-center'>
                                <div className="rating py-4 flex items-center text-sm">
                                    <BiStar className='text-Primary-0' />
                                    <BiStar className='text-Primary-0' />
                                    <BiStar className='text-Primary-0' />
                                    <BiStar className='text-Primary-0' />
                                    <BiStar className='text-Primary-0' />
                                </div>
                                <p className='text-gray-700 text-xs mt-0.5 ml-1'>250 rating</p>
                            </p>
                            <p className='text-gray-700 text-xs mt-0.5 ml-1'>Brand: No Brand</p>

                        </div>
                        <div className="py-4">
                            <p className="text-2xl text-Primary-0 ">$ 350</p>
                            <p className="text-sm text-gray-400 flex gap-2 "><strike>$380</strike> <span>10%</span> </p>
                        </div>

                        <div className="mt-7 flex gap-4 items-center">
                            <p className=' text-gray-700'>Quantity</p>

                            <div className="flex items-center gap-2">
                                <button className='text-xl'>+</button>
                                <input placeholder='1' className='w-[40px] text-center border h-[40px]' type="text" />
                                <button className='text-xl'>-</button>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-4">
                            <ButtonDownload><Link className='' to={'/checkout'}>Buy Now</Link> </ButtonDownload>
                            <ButtonOutLinePrimary>Add to cart</ButtonOutLinePrimary>
                        </div>
                    </div>
                    <div className="features font-Nunito w-full lg:w-[25%]">

                        <div className="px-4 py-4 flex flex-col md:flex-row lg:flex-col gap-2">
                            <div className="flex py-2 px-2 rounded gap-4 bg-gray-200 items-center">
                                <BiRocket className='text-Primary-0 text-[56px]' />
                                <div className="">
                                    <h3 className='text-xl text-Primary-0'>Free Delivery</h3>
                                    <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non.</p>
                                </div>
                            </div>
                            <div className="flex py-2 px-2 rounded gap-4 bg-gray-200 items-center">
                                <BiRocket className='text-Primary-0 text-[56px]' />
                                <div className="">
                                    <h3 className='text-xl text-Primary-0'>Free Delivery</h3>
                                    <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non.</p>
                                </div>
                            </div>
                            <div className="flex py-2 px-2 rounded gap-4 bg-gray-200 items-center">
                                <BiRocket className='text-Primary-0 text-[56px]' />
                                <div className="">
                                    <h3 className='text-xl text-Primary-0'>Free Delivery</h3>
                                    <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non.</p>
                                </div>
                            </div>
                            <div className="flex py-2 px-2 rounded gap-4 bg-gray-200 items-center">
                                <BiRocket className='text-Primary-0 text-[56px]' />
                                <div className="">
                                    <h3 className='text-xl text-Primary-0'>Free Delivery</h3>
                                    <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Productinfo