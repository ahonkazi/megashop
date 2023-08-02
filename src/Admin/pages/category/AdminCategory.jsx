import React, { useState } from 'react'
import MotionFrame from '../../components/MotionFrame'
import { BiPlus } from 'react-icons/bi'
import { InputWithIcon, InputWithPhoto } from '../../components/InputFields'
import CategoryTable from './CategoryTable'
import category from '../../assets/category/electronics.png'
import SubCategoryTable from './SubCategoryTable'

const AdminCategory = () => {
    const [categoryName, setCategoryName] = useState('')
    const [subCategoryName, setSubcategoryName] = useState('')
    const [subCategoryList, setSubcategoryList] = useState([])
    return (
        <MotionFrame>
            <section id="category" className=''>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <div className="form-wrapper ">
                        <h3 className='admin-title'>Add new Category</h3>
                        <form onSubmit={(e) => e.preventDefault()} id='add-category' className='admin-form'>
                            <div className="form-item">
                                <InputWithIcon icon={<BiPlus />} idName={'SubCategoryName'} setState={setSubcategoryName} placeholer={'Sub Category'} inputType="text" />
                                {
                                    subCategoryName === '' ? '' :
                                        <div className=" py-2">
                                            <span className='px-3 text-white py-1 select-none cursor-pointer text-sm bg-slate-700 rounded-3xl'>{subCategoryName}</span>
                                        </div>
                                }
                            </div>
                            <div className="form-item w-fit">
                                <InputWithPhoto img={category} inputType={'file'} idName={'category-photo'} />
                            </div>

                            <div className="flex justify-end">

                                <button className='flex items-center bg-slate-600 font-Montserrat  rounded-sm px-6 gap-2 py-2 text-white'>
                                    <span>Add</span>
                                    <span className="bg-slate-400 p-1 rounded-full text-slate-800">
                                        <BiPlus />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="form-wrapper ">
                        <h3 className='admin-title'>Add new Category</h3>
                        <form onSubmit={(e) => e.preventDefault()} id='add-category' className='admin-form'>
                            <div className="form-item">
                                <select name="" id="" className='w-full py-2.5 rounded px-4 font-Montserrat bg-slate-100'>
                                    <option value="" className='font-Montserrat'>Electronics</option>
                                    <option value="" className='font-Montserrat'>Bike</option>
                                    <option value="" className='font-Montserrat'>Bed</option>
                                    <option value="" className='font-Montserrat'>Dress</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <InputWithIcon stateList={subCategoryList} setStateList={setSubcategoryList} icon={<BiPlus />} idName={'CategoryName'} setState={setCategoryName} placeholer={'Category Name'} inputType="text" />

                                <div className="flex flex-wrap gap-2">
                                    {
                                        subCategoryList?.map(item =>
                                            <div className=" py-2">
                                                <span className='px-3 text-white py-1 select-none cursor-pointer text-sm bg-slate-700 rounded-3xl'>{item}</span>
                                            </div>)
                                    }
                                </div>


                            </div>
                            <div className="form-item w-fit">
                                <InputWithPhoto img={category} inputType={'file'} idName={'category-photo'} />
                            </div>

                            <div className="flex justify-end">

                                <button className='flex items-center bg-slate-600 font-Montserrat  rounded-sm px-6 gap-2 py-2 text-white'>
                                    <span>Add</span>
                                    <span className="bg-slate-400 p-1 rounded-full text-slate-800">
                                        <BiPlus />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* category tables */}
                <CategoryTable />
                <SubCategoryTable />
            </section>
        </MotionFrame>

    )
}

export default AdminCategory