import React from 'react'
import { NavBarFilter } from '../../Commponents/Navbar/Navbar'
import Productinfo from '../../Views/ProductDetails/Productinfo'
import ProductDetailsText from '../../Views/ProductDetails/ProductDetailsText'
import SimilerProducts from '../../Views/ProductDetails/SimilerProducts'
import Footer from '../../Views/CommonViews/Footer'

const ProductDetails = () => {
    return (
        <>

            <NavBarFilter />
            <Productinfo />
            <ProductDetailsText />
            <SimilerProducts />
            <Footer />


        </>
    )
}

export default ProductDetails