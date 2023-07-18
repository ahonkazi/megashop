import React from 'react'
import qr from '../../assets/images/Footer/qr.png'
import { ButtonDownload } from '../../Commponents/Button/Button'
const Footer = () => {
    return (
        <footer className='bg-[#2e2e54] mt-[100px] '>
            <div className="container mx-auto flex-wrap py-[20px] md:py-[30px] lg:py-[50px] flex items-center gap-4 md:gap-[100px]">
                <div className="item">
                    <div className="">
                        <h3 className="text-white font-Nunito text-xl">Customer Cares</h3>

                        <ul className='mt-[10px] text-gray-200 flex flex-col gap-2'>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum.</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh </a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum dolor.</a>
                            </li>

                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-[10px]">
                        <h3 className="text-white font-Nunito text-xl">Customer Cares</h3>

                        <ul className='mt-[10px] text-gray-200 flex flex-col gap-2'>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum.</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh </a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum dolor.</a>
                            </li>

                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="">
                        <h3 className="text-white font-Nunito text-xl">Customer Cares</h3>

                        <ul className='mt-[10px] text-gray-200 flex flex-col gap-2'>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum.</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh </a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh Lorem, ipsum dolor.</a>
                            </li>

                            <li className='text-xs '>
                                <a href="" className='hover:underline'>Dhaka,Bangladesh</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item md:ml-[500px] flex flex-col gap-4">
                        <div className="">
                            <img className='w-[100px]' src={qr} alt="" />
                        </div>
                        <div className="">
                            <ButtonDownload>Download App</ButtonDownload>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer