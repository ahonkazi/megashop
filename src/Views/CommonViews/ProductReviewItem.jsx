import React from 'react'
import profile from '../../assets/images/Auther/profile.jpeg'
import dress1 from '../../assets/images/Product/dress1.jpeg'
import { MdStar } from 'react-icons/md'
import { RatingCard } from '../../Commponents/Card/Card'
const ProductReviewItem = () => {
    return (
        <div className="review-item py-4 ">
            <div className="review-header rounded-md gap-4 flex justify-between items-center bg-gray-100 px-4 py-6 text-gray-700">
                <div className="flex items-center gap-4">
                    <img className='w-[60px] rounded-xl' src={profile} alt="" />
                    <div className="review-content">
                        <p>আপনার এই প্রোডাক্ট টা কিনে আমি সত্যিই অনেক খুশি <span className="text-rose-500">❤❤</span> </p>
                    </div>

                </div>

                <div className="flex text-Primary-0 items-center">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
            </div>
            <div className="review-body py-4 pl-8  flex">
                <div className="border-l-4 border-Primary-0 px-8 py-4">
                    <img className='h-[100px] cursor-pointer' src={dress1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductReviewItem