'use client';

import ProductCard from './product-card';


export default function ProductSlide({
    products
}) {
    if (products.length === 0) return null;
    return (
        <div className='w-full overflow-x-auto pb-6 pt-2'>
            <div className='flex animate-carousel gap-4'>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className='relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3'>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}