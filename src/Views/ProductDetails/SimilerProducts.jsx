import React from 'react'
import { ProductCard } from '../../Commponents/Card/Card'

const SimilerProducts = () => {
    return (
        <section className='mt-[10px]'>
            <div className="container mx-auto">
            <h2 className="section-title">Similer Products</h2>
                <div className="px-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SimilerProducts