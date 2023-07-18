import React from 'react'
import { ProductCard } from '../../Commponents/Card/Card'
import { ButtonOutLinePrimary } from '../../Commponents/Button/Button'

const SearchViews = () => {
    return (
        <>
            <div className='flex justify-between border-b py-4 px-2'>
                <p className='font-Nunito text-gray-500'>
                    884738 items found for "girls"
                </p>

                <div className="">
                    <div className="sort-box flex gap-2">
                        <p>Sort By</p>
                        <select className='px-4 text-gray-500 rounded-sm font-Nunito py-1' name="" id="">
                            <option className='font-Nunito' value="">Name</option>
                            <option className='font-Nunito' value="">Price</option>
                            <option className='font-Nunito' value="">Trends</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                {
                    [...new Array(10)].map(item =>
                        <ProductCard />
                    )
                }
            </div>

            <div className="py-6 flex justify-center">
                <div className="lg:w-[400px]">
                    <ButtonOutLinePrimary size={'full'}>Load More</ButtonOutLinePrimary>

                </div>
            </div>
        </>
    )
}

export default SearchViews