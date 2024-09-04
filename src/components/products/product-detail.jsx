'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetail({ product }) {
    const [selectedImage, setSelectedImage] = useState(product?.images[0]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    if (!product) return null;
    return (
        <div className='flex flex-col rounded-lg border p-8 md:p-12 lg:flex-row lg:gap-8 border-neutral-800 bg-black'>
            <div className='h-full w-full basis-full lg:basis-4/6'>
                <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
                    <Image
                        className='h-full w-full object-contain'
                        src={`/images/products/${product.slug}/${selectedImage}`}
                        alt={product.title}
                        width={2048}
                        height={1080}

                    />
                </div>
                {product.images.length > 1 && (
                    <div className='flex w-full items-center md:justify-center overflow-x-auto gap-2 py-4'>
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className={`h-16 w-16 min-h-16 min-w-16 max-h-16 max-w-16 cursor-pointer rounded-lg border ${image === selectedImage ? 'border-blue-600' : 'border-transparent'}`}
                                onClick={() => handleImageClick(image)}
                            >
                                <Image
                                    className={`h-full w-full object-cover rounded-lg ${image !== selectedImage && 'opacity-60'}`}
                                    src={`/images/products/${product.slug}/${image}`}
                                    alt={product.title}
                                    width={64}
                                    height={64}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='basis-full lg:basis-2/6 mt-4 lg:mt-0'>
                <div className='mb-6 flex flex-col gap-2 border-b pb-6 border-neutral-700'>
                    <h1 className='text-5xl font-medium'>{product.title}</h1>
                    {/* <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
                        <p>
                            {product.price}
                            <span className='ml-1 inline'>{product.currency}</span>
                        </p>
                    </div> */}
                    <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
                        Customizable
                    </div>
                </div>
                <div>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}