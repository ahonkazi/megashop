import React from 'react'
import { CategoryCard } from '../../Commponents/Card/Card'
import img1 from '../../assets/images/Categories/smartwatch.jpg'
const GridCategories = () => {
    return (
        <div className='mt-section'>
            <h2 className="section-title">Categories</h2>
            <div className="category-wrapper grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 px-4 bg-slate-100 pb-4">
                {
                    [...new Array(8)].map(
                        item =>
                            <CategoryCard img={img1} text={'Smartwatches'} link={'/search?category=smartwatch'} />
                    )
                }
            </div>
        </div>
    )
}

export default GridCategories