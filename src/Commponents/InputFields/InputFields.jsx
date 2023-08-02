import React from 'react'
import { ButtonBlue, ButtonOutLinePrimary } from '../Button/Button'

export const SearchWrapper = () => {
    return (
        <div className="search-wrapper lg:w-[550px] w-full font-Exo flex">
            <input type="text" placeholder="I'm looking for..." className='w-full border border-slate-400 px-2 outline-none text-[14px]' />
            <button className={`bg-Primary-0 text-slate-800 font-Exo shrink-0 rounded-r px-2.5 py-2 xl:px-[20px]`}>Search</button>
        </div>
    )
}

export const WriteAREview = () => {
    return (
        <div className="write-review mt-4">
            <textarea name="" id="" className='resize-none border-gray-100 border outline-none min-h-[150px] w-full px-4 py-4' placeholder='Write a review...'></textarea>

            <div className="flex py-4 justify-end items-center gap-4">

                <ButtonOutLinePrimary>Cancel</ButtonOutLinePrimary>
                <ButtonBlue>Send</ButtonBlue>
            </div>
        </div>
    )
}