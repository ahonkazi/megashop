import { createContext, useState } from "react";

export const GetContext = createContext();

export const Context = ({ children }) => {
    const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);
    const [searchPanelStatus, setSearchPanelStatus] = useState(false);
    const [mobileCartSlide, setMobileCartSlide] = useState(false);
    const categories = [
        {
            title: "Electronics",
            path: "/search?q=electronics",
            list: [
                {
                    title: "Desktop Assisories",
                    path: "/search?q=desktopassisories"
                },
                {
                    title: "Fan",
                    path: "/search?q=fan"
                },
                {
                    title: "Headphones",
                    path: "/search?q=headphones"
                },
            ]
        },
        {
            title: "Furniture",
            path: "/search?q=furnitures",

            list: [
                {
                    title: "Home Assisories",
                    path: "/search?q=homeassisories"
                },
                {
                    title: "Sofa",
                    path: "/search?q=sofa"
                },
                {
                    title: "Tables",
                    path: "/search?q=tables"
                },
            ]
        },
        {
            title: "Watches Collection",
            path: "/search?q=watches",
            list: [
                {
                    title: "Boys Watches",
                    path: "/search?q=boys-watch"
                },
                {
                    title: "Girls Watch",
                    path: "/search?q=girls-watch"
                },
                {
                    title: "Babies Watch",
                    path: "/search?q=babies-watch"
                },
            ]
        },
        {
            title: "Clothes Collection",
            path: "/search?q=clothes-collection",
            list: [
                {
                    title: "Boys Clothe",
                    path: "/search?q=boys-clothes"
                },
                {
                    title: "Girls Clothe",
                    path: "/search?q=girls-clothes"
                },
                {
                    title: "Babies Clothe",
                    path: "/search?q=babies-clothes"
                },
            ]
        },
        {
            title: "Online Courses",
            path: "/search?q=online-courses",
            list: [
                {
                    title: "10MS Courses",
                    path: "/search?q=10ms-courses",
                },
                {
                    title: "Web Development",
                    path: "/search?q=webdevelopment"
                },
                {
                    title: "Study",
                    path: "/search?q=study"
                },
                {
                    title: "Graphics Design",
                    path: "/search?q=graphicsdesign",
                },
                {
                    title: "App Development",
                    path: "/search?q=app-development"
                },
                {
                    title: "Data Analysis",
                    path: "/search?q=data-analysis"
                },
            ]
        },
    ]

 

    return (
        <GetContext.Provider value={{
            mobileSidebarStatus,
            categories,
            setMobileSidebarStatus,
            searchPanelStatus,
            setSearchPanelStatus,
            setMobileCartSlide,
            mobileCartSlide,

        }} >{children}</GetContext.Provider>
    )
}