import React from 'react'
import { ProductCard } from '../../Commponents/Card/Card'
import { ButtonOutLinePrimary } from '../../Commponents/Button/Button'

const JustForYou = () => {
    return (
        <section className='JustForYou px-4 mt-section'>
            <h2 className="section-title">Just For You</h2>
            <div className="product-wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    [...new Array(30)].map(item => <ProductCard />)
                }
            </div>
            <div className="product-wrapper-footer flex justify-center mt-4 py-4">
                <div className="lg:w-[400px]">
                    <ButtonOutLinePrimary size={'full'}>Load More</ButtonOutLinePrimary>

                </div>
            </div>
        </section>
    )
}

export default JustForYou