import React, { useState } from 'react'
import { PaymentMethodCard } from '../../Commponents/Card/Card'
import bkash from '../../assets/images/Payment/bkash.png'
import paytm from '../../assets/images/Payment/paytm.png'
import nagad from '../../assets/images/Payment/nagad.png'
import bitcoin from '../../assets/images/Payment/bitcoin.png'
import { ButtonBlue } from '../../Commponents/Button/Button'


const CheckoutPayment = () => {
    const [activeMethod, setActiveMethod] = useState(0)

    const paymentMethods = [bkash, paytm, nagad,bitcoin]
    return (
        <div className='bg-white font-Nunito min-h-[400px] px-4 py-4'>
            <h2 className="section-title">Payment</h2>

            <p className='text-gray-700 font-Montserrat text-lg'>Select Payment Method:</p>

            <div className="flex items-center mt-[10px] gap-2">
                {
                    paymentMethods.map((item, index) =>
                        <PaymentMethodCard activeMethod={activeMethod} setActiveMethod={setActiveMethod} index={index} img={item} />
                    )
                }
            </div>

            <div className="flex my-[30px] justify-center">
                <ButtonBlue>Proceed To checkout</ButtonBlue>
            </div>
        </div>
    )
}

export default CheckoutPayment