import React from 'react'
import fashion from '../../assets/images/home/fashion-icon.png'
import { BiChevronRight } from 'react-icons/bi'
const HomePageCategory = () => {
    return (
        <div className='flex mt-section gap-2 flex-wrap font-Nunito md:px-4'>
            <div className="flex group shadow gap-4 py-2 hover:text-Primary-0 duration-300 cursor-pointer select-none items-center justify-between bg-white min-w-[100px] rounded-md px-3">
                <div className="flex gap-2 items-center">
                    <img className='w-[40px] h-[40px] rounded-full' src={fashion} alt="" />
                    <p>Mart</p>
                </div>

                <p className='-translate-x-3 duration-300 group-hover:translate-x-0'>
                    <BiChevronRight className='text-Primary-0 text-xl' />
                </p>
            </div>
            <div className="flex group shadow gap-4 py-2 hover:text-Primary-0 duration-300 cursor-pointer select-none items-center justify-between bg-white min-w-[100px] rounded-md px-3">
                <div className="flex gap-2 items-center">
                    <img className='w-[40px] h-[40px] rounded-full' src={fashion} alt="" />
                    <p>Fashion</p>
                </div>

                <p className='-translate-x-3 duration-300 group-hover:translate-x-0'>
                    <BiChevronRight className='text-Primary-0 text-xl' />
                </p>
            </div>
            <div className="flex group shadow gap-4 py-2 hover:text-Primary-0 duration-300 cursor-pointer select-none items-center justify-between bg-white min-w-[100px] rounded-md px-3">
                <div className="flex gap-2 items-center">
                    <img className='w-[40px] h-[40px] rounded-full' src={fashion} alt="" />
                    <p>Beauty and Glamour</p>
                </div>

                <p className='-translate-x-3 duration-300 group-hover:translate-x-0'>
                    <BiChevronRight className='text-Primary-0 text-xl' />
                </p>
            </div>
            <div className="flex group shadow gap-4 py-2 hover:text-Primary-0 duration-300 cursor-pointer select-none items-center justify-between bg-white min-w-[100px] rounded-md px-3">
                <div className="flex gap-2 items-center">
                    <img className='w-[40px] h-[40px] rounded-full' src={fashion} alt="" />
                    <p>Home Makeover</p>
                </div>

                <p className='-translate-x-3 duration-300 group-hover:translate-x-0'>
                    <BiChevronRight className='text-Primary-0 text-xl' />
                </p>
            </div>
            <div className="flex group shadow gap-4 py-2 hover:text-Primary-0 duration-300 cursor-pointer select-none items-center justify-between bg-white min-w-[100px] rounded-md px-3">
                <div className="flex gap-2 items-center">
                    <img className='w-[40px] h-[40px] rounded-full' src={fashion} alt="" />
                    <p>Free Delivery</p>
                </div>

                <p className='-translate-x-3 duration-300 group-hover:translate-x-0'>
                    <BiChevronRight className='text-Primary-0 text-xl' />
                </p>
            </div>


        </div>
    )
}

export default HomePageCategory