import React, { useContext, useEffect } from 'react'
import Navbar from '../../Commponents/Navbar/Navbar'
import { GetContext } from '../../context/Context'
import LayoutPrimary from '../../Layout/LayoutPrimary'
import HomePageWrapper from './HomePageWrapper'

const HomePage = () => {
    const context = useContext(GetContext)
    useEffect(() => {
        context.setMobileSidebarStatus(false)

    }, [])

    return (
        <>
            <Navbar />
            <LayoutPrimary>
                <HomePageWrapper />
            </LayoutPrimary>
        </>
    )
}

export default HomePage