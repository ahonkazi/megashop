import React, { useContext } from 'react'
import style from "./desktop.module.scss"
import { BiCategory, BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { GetContext } from '../../context/Context'
const CategoryBar = () => {

    const context = useContext(GetContext)

    const navCateories = [
        {
            title: "Clothes",
            list: [
                {
                    title: "Boys",
                    path: "/search?q=boyes-clothes",
                },
                {
                    title: "T-shirts",
                    path: "/search?q=t-shirts",
                },
                {
                    title: "Blankettes",
                    path: "/search?q=Blankettes",
                },
            ]
        },
        {
            title: "Electronics",
            list: [
                {
                    title: "Youtube Accessories",
                    path: "/search?q=yt-accessories",
                },
                {
                    title: "Air Coolers",
                    path: "/search?q=air-coolers",
                },
                {
                    title: "Desktop Associates",
                    path: "/search?q=desktop-accessories",
                },
                {
                    title: "Home Products",
                    path: "/search?q=home-products",
                },
            ]
        },
        {
            title: "Hot Products",
            list: [
                {
                    title: "Youtube Accessories",
                    path: "/search?q=yt-accessories",
                },
                {
                    title: "Air Coolers",
                    path: "/search?q=air-coolers",
                },
                {
                    title: "Desktop Associates",
                    path: "/search?q=desktop-accessories",
                },
                {
                    title: "Home Products",
                    path: "/search?q=home-products",
                },
                {
                    title: "Green Tea",
                    path: "/search?q=green-tea",
                },
            ]
        },
    ]
    return (
        <div className={`${style.CategoryBarArea} `}>
            <div className="container mx-auto flex justify-between items-center">
                <ul className='flex items-center gap-2 font-Montserrat'>
                    <li className={`${style.categoryButton} lg:pr-[140px] relative py-2.5  font-Exo cursor-pointer border-t-2 border-slate-800   font-medium text-slate-800 text-[15px] gap-2 flex items-center mr-2`}>
                        <BiCategory />
                        <p>Search By Category</p>


                        <div className={`absolute ${style.searchByCategoryWrapper} lg:hidden top-full left-0 bg-white max-h-[80vh] w-[300px]`}>
                            <ul className="category-menu font-Montserrat">

                                {
                                    context.categories?.map(item =>
                                        <li className={`${style.categoryDropdown} relative `}>
                                            <div className={`dropdown-header hover:bg-Primary-0 hover:text-white duration-300 cursor-pointer flex items-center  py-2 justify-between px-4`}>
                                                <div className="left font-medium">
                                                    <Link to={item.path}>{item.title}</Link>
                                                </div>
                                                <div className="right-icon text-lg">
                                                    <BiChevronRight className={`duration-300`} />
                                                </div>
                                            </div>


                                            <ul className={`${style.categoryDropdownItem} z-[100] w-[300px] absolute  left-full top-0 bg-white`}>
                                                {

                                                    item.list.map(subItem =>
                                                        <li className="cursor-pointer hover:text-Primary-0 duration-300 border-b border-slate-500  flex items-center py-2 justify-between px-4">
                                                            <div className="left pl-4">
                                                                <Link to={subItem.path}>{subItem.title}</Link>
                                                            </div>
                                                        </li>

                                                    )
                                                }
                                            </ul>



                                        </li>)
                                }

                            </ul>
                        </div>
                    </li>

                    {
                        navCateories.map(item =>
                            <li className={`mr-4 relative py-2.5  ${style.navDropdown}`}>
                                <Link to={""} className='flex cursor-pointer items-center'>
                                    <p>{item.title}</p>
                                    <BiChevronDown className='text-[24px]' />
                                </Link>

                                <ul className={`${style.navDropdownMenu} z-[100] cursor-pointer absolute top-full left-0 w-[250px] bg-white px-4 py-4`}>
                                    {
                                        item.list.map(subItem =>
                                            <li className='py-1'>
                                                <Link to={subItem.path} className='hover:text-Primary-0 duration-300'>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                        )
                    }
                </ul>

                <div className="hidden lg:block">
                    <p> <span className='font-semibold'>Hotline:</span> +8801313386702</p>
                </div>

            </div>
        </div>
    )
}

export default CategoryBar