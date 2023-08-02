import React from 'react'
import category from '../../assets/category/electronics.png'
import { BiEdit } from 'react-icons/bi'
import { MdDelete, MdOpenInBrowser } from 'react-icons/md'

const CategoryTable = () => {
    return (
        <div className='admin-gap'>
            <h2 className="admin-title">Category Table</h2>

            <div className="table-wrapper max-h-[800px] overflow-y-auto w-full overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
                <table className='w-full min-w-[500px] text-center mt-[15px] font-Nunito border-collapse'>
                    <thead>
                        <tr className='bg-slate-500 text-slate-200'>
                            <th className='py-2 '>ID.</th>
                            <th className='py-2 '>Photo</th>
                            <th className='py-2 '>Category</th>
                            <th className='py-2 '>Date</th>
                            <th className='py-2 '>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr className='bg-slate-300 text-slate-600 '>
                            <td className='py-2'>01.</td>
                            <td className='py-2'><img src={category} className='w-[45px] h-[45px] rounded-full mx-auto' alt="" /></td>
                            <td className='py-2'>Electronics</td>
                            <td className='py-2'>12-Dec-2023</td>
                            <td className='py-2'>
                                <p className="flex justify-center gap-4 items-center mx-auto">
                                    <button className='text-xl'>
                                        <BiEdit />
                                    </button>
                                    <button className='text-xl text-rose-500'>
                                        <MdDelete />
                                    </button>
                                    <button className='text-xl'>
                                        <MdOpenInBrowser />
                                    </button>
                                </p>
                            </td>
                        </tr>
                        <tr className='bg-slate-400 text-slate-600 '>
                            <td className='py-2'>02.</td>
                            <td className='py-2'><img src={category} className='w-[45px] h-[45px] rounded-full mx-auto' alt="" /></td>
                            <td className='py-2'>Dress</td>
                            <td className='py-2'>12-Dec-2023</td>
                            <td className='py-2'>
                                <p className="flex justify-center gap-4 items-center mx-auto">
                                    <button className='text-xl'>
                                        <BiEdit />
                                    </button>
                                    <button className='text-xl text-rose-500'>
                                        <MdDelete />
                                    </button>
                                    <button className='text-xl'>
                                        <MdOpenInBrowser />
                                    </button>
                                </p>
                            </td>
                        </tr>

                        <tr className='bg-slate-300 text-slate-600 '>
                            <td className='py-2'>03.</td>
                            <td className='py-2'><img src={category} className='w-[45px] h-[45px] rounded-full mx-auto' alt="" /></td>
                            <td className='py-2'>Furniture</td>
                            <td className='py-2'>12-Dec-2023</td>
                            <td className='py-2'>
                                <p className="flex justify-center gap-4 items-center mx-auto">
                                    <button className='text-xl'>
                                        <BiEdit />
                                    </button>
                                    <button className='text-xl text-rose-500'>
                                        <MdDelete />
                                    </button>
                                    <button className='text-xl'>
                                        <MdOpenInBrowser />
                                    </button>
                                </p>
                            </td>
                        </tr>
                        <tr className='bg-slate-400 text-slate-600 '>
                            <td className='py-2'>04.</td>
                            <td className='py-2'><img src={category} className='w-[45px] h-[45px] rounded-full mx-auto' alt="" /></td>
                            <td className='py-2'>Bike</td>
                            <td className='py-2'>12-Dec-2023</td>
                            <td className='py-2'>
                                <p className="flex justify-center gap-4 items-center mx-auto">
                                    <button className='text-xl'>
                                        <BiEdit />
                                    </button>
                                    <button className='text-xl text-rose-500'>
                                        <MdDelete />
                                    </button>
                                    <button className='text-xl'>
                                        <MdOpenInBrowser />
                                    </button>
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default CategoryTable