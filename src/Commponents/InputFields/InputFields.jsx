import React from 'react'

export const SearchWrapper = () => {
    return (
        <div className="search-wrapper lg:w-[550px] w-full font-Exo flex">
            <input type="text" placeholder="I'm looking for..." className='w-full border border-slate-400 px-2 outline-none text-[14px]' />
            <button className={`bg-Primary-0 text-slate-800 font-Exo shrink-0 rounded-r px-2.5 py-2 xl:px-[20px]`}>Search</button>
        </div>
    )
}

