import React from 'react'
import ProductReviewItem from '../CommonViews/ProductReviewItem'
import { WriteAREview } from '../../Commponents/InputFields/InputFields'
import { ButtonOutLinePrimary } from '../../Commponents/Button/Button'

const ProductReview = () => {
    return (
        <section className='mt-[10px] font-Nunito'>
            <div className="bg-white">
                <h1 className="text-xl text-gray-700 py-3 bg-gray-50  px-4">Product Review</h1>
                <div className="px-4">
                    <div className="flex gap-2 flex-col">
                        <WriteAREview/>
                        <ProductReviewItem />
                        <ProductReviewItem />

                        <div className="flex justify-end py-4">
                            <ButtonOutLinePrimary>Load More</ButtonOutLinePrimary>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductReview