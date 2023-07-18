import React, { useContext } from 'react'
import { SearchWrapper } from '../InputFields/InputFields'
import { MdClose } from 'react-icons/md'
import { GetContext } from '../../context/Context'

const MobileSearchSlide = () => {
    const context = useContext(GetContext)
    return (
        <div className={`mobileSearchPanel duration-500 ${context.searchPanelStatus?'':'opacity-0 translate-y-full'} fixed top-0 left-0 bg-white h-full w-full z-[1000]`}>
            <div className="px-8 pt-3 flex justify-end">
                <button onClick={() => context.setSearchPanelStatus(false)} className='text-[32px] text-Primary-0'>
                    <MdClose />
                </button>
            </div>
            <div className="box pt-4 px-8">
                <SearchWrapper />
            </div>
        </div>
    )
}

export default MobileSearchSlide