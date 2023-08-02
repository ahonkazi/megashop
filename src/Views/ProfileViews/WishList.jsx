import React from 'react'
import product2 from '../../assets/images/Product/salt.jpg'
import { MdClose } from 'react-icons/md'
import { BiCart, BiCartAdd } from 'react-icons/bi'
import { ButtonBlue } from '../../Commponents/Button/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const WishList = () => {
    return (
        <AnimatePresence>
            <motion.section initial={{opacity:0,scale:0.99889}} animate={{opacity:1,scale:1}} transition={{duration:0.7}} className='px-4 font-Nunito'>
                <h2 className="section-title">WishList ❤</h2>
                <ul className='py-4 flex flex-col gap-1'>
                    <li className=' rounded bg-gray-100 px-4 flex-col md:flex-row justify-start flex md:justify-between gap-2 md:items-center py-4'>
                        <div className="flex items-center gap-3">
                            <img className='h-[60px]' src={product2} alt="" />
                            <p className='text-gray-600'>Premium Salt 1kg</p>
                            <p className='text-Primary-0 text-[22px]'>$25.0</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <ButtonBlue> <Link to={'/checkout'}>Buy Now</Link> </ButtonBlue>
                            <BiCartAdd className='text-Primary-0 text-xl' />
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                    <li className=' rounded bg-gray-100 px-4 flex-col md:flex-row justify-start flex md:justify-between gap-2 md:items-center py-4'>
                        <div className="flex items-center gap-3">
                            <img className='h-[60px]' src={product2} alt="" />
                            <p className='text-gray-600'>Premium Salt 1kg</p>
                            <p className='text-Primary-0 text-[22px]'>$25.0</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <ButtonBlue> <Link to={'/checkout'}>Buy Now</Link> </ButtonBlue>
                            <BiCartAdd className='text-Primary-0 text-xl' />
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                    <li className=' rounded bg-gray-100 px-4 flex-col md:flex-row justify-start flex md:justify-between gap-2 md:items-center py-4'>
                        <div className="flex items-center gap-3">
                            <img className='h-[60px]' src={product2} alt="" />
                            <p className='text-gray-600'>Premium Salt 1kg</p>
                            <p className='text-Primary-0 text-[22px]'>$25.0</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <ButtonBlue> <Link to={'/checkout'}>Buy Now</Link> </ButtonBlue>
                            <BiCartAdd className='text-Primary-0 text-xl' />
                            <MdClose className='text-rose-500 text-xl' />
                        </div>
                    </li>
                </ul>
            </motion.section>
        </AnimatePresence>
    )
}

export default WishList