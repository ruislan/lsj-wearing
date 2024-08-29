'use client';

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <Link
            className='relative block aspect-square h-full w-full'
            href={`/products/${product.slug}`}
        >
            {/* Product Image */}
            <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-blue-600 bg-black relative border-neutral-800'>
                <Image
                    className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                    src={`/images/products/${product.slug}/${product.images[0]}`}
                    width={500}
                    height={500}
                    alt={product.title}
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div className="flex items-center rounded-full border p-1 text-sm font-semibold backdrop-blur-md border-neutral-800 bg-black/70 text-white">
                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{product.title}</h3>
                        {/* <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                            {price}
                            <span className="ml-1 inline @[275px]/label:inline">{currency}</span>
                        </p> */}
                        {product.isCustomizable && (
                            <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                                Customizable
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}