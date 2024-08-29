'use client';

import ProductCard from './product-card';

export default function ProductHighlight({
    products
}) {
    if (products.length === 0) return null;
    return (
        <div className='flex flex-col gap-2 md:grid md:grid-cols-4 mx-auto w-full max-w-screen-2xl px-4 lg:px-6 pb-4'>
            <div className='row-span-2 col-span-2'>
                <ProductCard product={products[0]} />
            </div>
            {products.length > 1 && products.slice(1).map((product, index) => (
                <div
                    key={index}
                    className='col-span-1'
                >
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}