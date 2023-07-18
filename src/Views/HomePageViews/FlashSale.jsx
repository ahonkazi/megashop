import React from 'react'
import { ButtonOutLinePrimary } from '../../Commponents/Button/Button'
import { ProductCard } from '../../Commponents/Card/Card'

const FlashSale = () => {
    return (
        <section className='mt-section font-Nunito'>
            <h2 className="section-title">FlashSale</h2>
            <div className="flashSaleHeader flex justify-between py-2 bg-white px-4 items-center">
                <div className="flex">
                    <p className=''>On sale now</p>

                </div>
                <ButtonOutLinePrimary>Shop Now</ButtonOutLinePrimary>
            </div>

            <div className="flash-items grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-slate-100 py-4 px-4">
                {
                    [...new Array(6)].map(item =>
                        <ProductCard />
                    )
                }

            </div>
        </section>
    )
}

export default FlashSale