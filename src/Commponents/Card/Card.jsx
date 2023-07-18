import React from 'react'
import img1 from '../../assets/images/Product/salt.jpg'
import { ButtonOutLinePrimary } from '../Button/Button'
import { Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'
import { BiStar } from 'react-icons/bi'
export const ProductCard = () => {

    return (
        <div className="product-card w-full bg-white sm:max-w-[250px]">
            <Link to={'/product?id=1011'}>
                <div className="product-img">
                    <img src={img1} alt="" />
                </div>
                <div className="card-body px-2 py-2">
                    <p className="product-title">Fresh Premium Salt 1kg</p>

                    <p className="price mt-3 text-Primary-0 text-[24px]">$2.5</p>
                    <p className="discount flex items-center gap-2">

                        <span className='text-gray-400 text-sm'>
                            <strike>$ 2.5</strike>
                        </span>
                        <span className='text-xs text-gray-700 font-medium'>11%</span>

                    </p>
                </div>
            </Link>
            <div className="card-footer">
                <ButtonOutLinePrimary size={'full'}>Add to Cart</ButtonOutLinePrimary>
            </div>
        </div>
    )
}
export const CategoryCard = ({ img, text, link }) => {

    return (
        <Link to={link} className="category-block border flex  flex-col items-center px-4 py-2 text-sm justify-center font-Exo text-center  bg-white">
            <img className='w-[70px]' src={img} alt="" />
            <p>{text}</p>
        </Link>
    )
}


export const RatingCard = ({ rating }) => {
    return (
        <>
            {
                [...new Array(5)].map((item, index) => (index < rating) ? <MdStar /> : <BiStar />
                )
                
            }
            {
                rating < 5? <p className='text-sm text-gray-500 pl-2'>And up</p> : ''
            }
            
        </>
    )
}