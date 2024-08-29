'use client';
import clsx from 'clsx';
import Link from 'next/link';

const variants = {
    size: {
        'default': 'w-12 h-12 text-3xl',
        'sm': 'w-10 h-10 text-2xl',
        'lg': 'w-16 h-16 text-4xl',
        'xl': 'w-20 h-20 text-5xl'
    }
};

export default function Logo({ size = 'default' }) {
    return (
        <Link
            href='/'
            className={clsx(
                'flex flex-none items-center justify-center',
                'border border-neutral-700 bg-black rounded-xl',
                variants.size[size]
            )}>
            <span className='flex justify-center items-center'>L</span>
        </Link>
    );
}