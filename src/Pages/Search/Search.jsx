import React from 'react'
import { NavBarFilter } from '../../Commponents/Navbar/Navbar'
import LayoutSearch from '../../Layout/LayoutSearch'
import SearchViews from '../../Views/SearchViews/SearchViews'
import Footer from '../../Views/CommonViews/Footer'

const Search = () => {
    return (
        <>
            <NavBarFilter />
            <LayoutSearch>
                <SearchViews />
            </LayoutSearch>

        </>
    )
}

export default Search