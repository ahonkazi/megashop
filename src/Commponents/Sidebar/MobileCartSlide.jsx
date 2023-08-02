import React, { useContext } from 'react'
import { GetContext } from '../../context/Context'
import { MdArrowRightAlt, MdClose } from 'react-icons/md'
import img from '../../assets/images/Product/salt.jpg'
const MobileCartSlide = () => {
    const context = useContext(GetContext)
    return (
        <div className={`fixed top-0 right-0 w-full h-full duration-300 ${context.mobileCartSlide ? '' : '  pointer-events-none opacity-0'} bg-black bg-opacity-50 `}>
            <div className={`MobileCartSlide absolute top-0 right-0 duration-200 px-2 ${context.mobileCartSlide ? '' : 'translate-x-full pointer-events-none opacity-0'} duration-500 bg-white w-[300px] sm:w-[400px] h-full`}>
                <div className="py-2 flex justify-end">
                    <button onClick={() => context.setMobileCartSlide(false)} className='text-[28px] duration-300 hover:translate-x-2 bg-Primary-0 w-[36px] h-[36px] flex justify-center items-center rounded-full text-white  '>
                        <MdArrowRightAlt />
                    </button>
                </div>
                <ul className="cart-list flex flex-col gap-2">
                    <li className='px-2 py-2 bg-gray-100 flex justify-between items-center'>
                        <img src={img} className='h-[60px]' alt="" />
                        <div className="flex items-center gap-2">
                            <p className='text-base text-Primary-0 pb-1.5'>$12.2</p>
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                    <li className='px-2 py-2 bg-gray-100 flex justify-between items-center'>
                        <img src={img} className='h-[60px]' alt="" />
                        <div className="flex items-center gap-2">
                            <p className='text-base text-Primary-0 pb-1.5'>$12.2</p>
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                    <li className='px-2 py-2 bg-gray-100 flex justify-between items-center'>
                        <img src={img} className='h-[60px]' alt="" />
                        <div className="flex items-center gap-2">
                            <p className='text-base text-Primary-0 pb-1.5'>$12.2</p>
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileCartSlide