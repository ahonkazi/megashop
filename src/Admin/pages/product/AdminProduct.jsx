import React, { useState } from 'react'
import MotionFrame from '../../components/MotionFrame'
import { InputWithIcon } from '../../components/InputFields'
import { BiPlus } from 'react-icons/bi'
import { ButtonBlue } from '../../../Commponents/Button/Button'

const AdminProduct = () => {
    const [textarea, setTextArea] = useState('')
    const [productImgList, setProductImgList] = useState([])

    const handleImg = (e) => {
        const files = e.target.files
        for (let i = 0; i < 5; i++) {
            let fileName = files[i].name
            if (productImgList.length > 0) {
                let flag = false;

                for (let j = 0; j < productImgList.length; j++) {
                    if (fileName === productImgList[j].name) {
                        flag = true;
                    }
                }
                if (flag === false) {
                    setProductImgList(list => [...list, files[i]])

                }
            } else {
                setProductImgList(list => [...list, files[i]])

            }
        }


    }
    return (
        <MotionFrame>
            <div className="">
                <h3 className="admin-title">Add Products</h3>
                <div className="form-wrapper">
                    <form action="" className='admin-form' onSubmit={(e) => e.preventDefault()}>
                        <div className="form-item">
                            <InputWithIcon icon={<BiPlus />} inputType={'text'} placeholer={'Product Title'} />
                        </div>
                        <div className="form-item">
                            <select name="" id="" className='w-full py-2.5 rounded px-4 font-Montserrat bg-slate-100'>
                                <option value="" className='font-Montserrat' >Select Category</option>
                                <option value="" className='font-Montserrat'>Bike</option>
                                <option value="" className='font-Montserrat'>Bed</option>
                                <option value="" className='font-Montserrat'>Dress</option>
                            </select>
                        </div>
                        <div className="form-item">
                            <select name="" id="" className='w-full py-2.5 rounded px-4 font-Montserrat bg-slate-100'>
                                <option value="" className='font-Montserrat' >Select Sub Category</option>
                                <option value="" className='font-Montserrat'>Bike</option>
                                <option value="" className='font-Montserrat'>Bed</option>
                                <option value="" className='font-Montserrat'>Dress</option>
                            </select>
                        </div>
                        <div className="form-item">
                            <textarea value={textarea} onChange={(e) => setTextArea(e.target.value)} className="text-area resize-none w-full min-h-[250px] px-4 py-4 border border-transparent focus:border-slate-400 outline-none bg-slate-100 font-Montserrat" placeholder='Product Details'>
                            </textarea>
                        </div>
                        <div className="form-item w-fit">
                            <label htmlFor="product-img">
                                <div className="flex  items-center flex-wrap w-fit gap-4">

                                    {
                                        productImgList?.map(item =>
                                            <img src={URL.createObjectURL(item)} className='w-[120px] rounded' alt="" />
                                        )
                                    }
                                    <input accept='image/*' onChange={(e) => handleImg(e)} type="file" name="" id="product-img" multiple hidden />
                                    <p className="rounded-full cursor-pointer text-slate-700 p-3 text-xl bg-slate-200">
                                        <BiPlus />

                                        
                                    </p>
                                </div>

                            </label>
                        </div>

                        <div className="form-item flex justify-end">
                            <ButtonBlue><span className='font-Montserrat'>Upload Product</span></ButtonBlue>
                        </div>
                    </form>
                </div>
            </div>
        </MotionFrame>
    )
}

export default AdminProduct