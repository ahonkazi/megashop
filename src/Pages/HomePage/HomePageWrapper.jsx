import React from 'react'
import BannarAds from '../../Views/HomePageViews/BannarAds'
import HomePageCategory from '../../Views/HomePageViews/HomePageCategory'
import FlashSale from '../../Views/HomePageViews/FlashSale'
import GridCategories from '../../Views/HomePageViews/GridCategories'
import JustForYou from '../../Views/HomePageViews/JustForYou'
const HomePageWrapper = () => {
    return (
        <div className='HomePageWrapper'>
            <BannarAds />
            <HomePageCategory />
            <FlashSale />
            <GridCategories />
            <JustForYou/>
         
        </div>
    )
}

export default HomePageWrapper