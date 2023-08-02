import React from 'react'
import { NavBarFilter } from '../../Commponents/Navbar/Navbar'
import CheckoutProductList from '../../Views/CheckoutViews/CheckoutProductList'
import CheckoutPayment from '../../Views/CheckoutViews/CheckoutPayment'

const Checkout = () => {
    return (
        <>
            <NavBarFilter />

            <section className='mt-[10px]'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CheckoutProductList />
                        <CheckoutPayment />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Checkout