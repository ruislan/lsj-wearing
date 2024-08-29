'use client';

import Link from 'next/link';

export default function Menu({
    name,
    link
}) {
    return (
        <Link
            className='underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300'
            href={link}
        >
            {name}
        </Link>
    );
}