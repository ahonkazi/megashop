import React, { useContext } from 'react'
import { GetContext } from '../../context/Context'
import { MdArrowRightAlt } from 'react-icons/md'

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
            </div>
        </div>
    )
}

export default MobileCartSlide