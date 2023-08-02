import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = window.location.pathname.split('/');
    // console.log(location)
    return (
        <div className='py-3 px-2'>
            <div className="container mx-auto">
                <p className="flex gap-2 font-Nunito items-center">
                    <Link to={'/'} className='text-gray-800'>Home </Link>
                    <BiChevronRight />
                    <span className='text-gray-500 '>{location[1]}</span>

                </p>
            </div>
        </div>
    )
}

export default Breadcrumbs