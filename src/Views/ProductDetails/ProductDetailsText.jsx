import React from 'react'
import { ProductCard } from '../../Commponents/Card/Card'
import photo from '../../assets/images/Product/hand-gripper.jpg'
import ProductReview from './ProductReview'
const ProductDetailsText = () => {
    return (
        <section className=' mt-[10px]'>
            <div className="container mx-auto ">
                <div className="px-2">
                    <div className="flex gap-2 flex-wrap  md:flex-nowrap">
                        <div className="h-fit py-4">
                            <div className="bg-white">
                                <h2 className='py-4 px-4 bg-gray-50 text-gray-800 font-Nunito text-xl'>Product details of 6-50Kg Adjustable Heavy Grips Hand Gripper Gym Power Fitness Hand Exerciser Grip</h2>
                                <div className="px-4">
                                    <p className='border-b py-4 text-sm text-gray-500'>
                                        Tpye: Hand gripsMaterial: New reinforced ABS, TPR elastic plastic, Polypropylene and fine steelStrength Range: 6-60 KgColor: orange&blackSize: 15 * 10 * 2cmWeight:153g
                                    </p>

                                    <br />
                                    <p className='py-4 text-sm text-gray-500'>
                                        6-50Kg Adjustable Heavy Grips Hand Gripper Gym Power Fitness Hand Exerciser Grip

                                        Tpye: Hand gripsMaterial: New reinforced ABS, TPR elastic plastic, Polypropylene and fine steelStrength Range: 6-60 KgColor: orange&blackSize: 15 * 10 * 2cmWeight:153g

                                        Single hand power grip

                                        Sturdy and robust design

                                        5kg - 50kg adjustable range, You can adjust the strength tension from 5kg to 50kg by turning the red rotary knob.

                                        An excellent training tool that strengthens your hands, wrist and forearm.

                                        Small, exquisite, lightweight and portable, you can carry it with you to exercise anytime.

                                        Suitable for the elderly, the office crowd and sports enthusiasts.
                                    </p>

                                    <img className='max-w-[400px]' src={photo} alt="" />

                                </div>
                            </div>

                            <ProductReview />

                        </div>
                        <div className="products md:w-[250px] py-4 flex flex-wrap md:flex-col gap-2 md:shrink-0 ">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ProductDetailsText