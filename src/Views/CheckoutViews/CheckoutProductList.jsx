import React from 'react'
import { CheckoutProductCard } from '../../Commponents/Card/Card'

const CheckoutProductList = () => {
    return (
        <div className=' bg-white'>
            <div style={{ scrollbarWidth: 'thin' }} className="grid h-[400px] overflow-y-auto grid-cols-1 gap-1 px-4 py-4">
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
                <CheckoutProductCard />
            </div>
            <div className="bg-white py-6 flex items-center justify-between px-8">
                <p className='text-gray-700 text-xl'>Total: </p>
                <p className='text-Primary-0 text-xl font-Nunito'>$124</p>

            </div>
        </div>
    )
}

export default CheckoutProductList