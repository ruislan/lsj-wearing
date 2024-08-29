'use client';

import Link from "next/link";
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from "../ui/icons";

export default function Footer() {
    return (
        <footer className='text-neutral-400'>
            <div className='border-t py-6 text-sm border-neutral-700'>
                <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0'>
                    <p className='order-1 md:order-none'>© 2024 LSJ Wearing. All rights reserved.</p>
                    <div className='flex items-center gap-4 md:ml-auto'>
                        <Link href='https://www.facebook.com/profile.php?id=61564842444049'><FacebookIcon className='w-6 h-6 hover:text-gray-300' /></Link>
                        <Link href='https://www.instagram.com/chongqinglingshengji/'><InstagramIcon className='w-6 h-6 hover:text-gray-300' /></Link>
                        <Link href='https://x.com/Lingshengji?t=SQCuhYzaw35vgPjvV01yYA&s=05'><TwitterIcon className='w-6 h-6 hover:text-gray-300' /></Link>
                        <Link href='https://pin.it/1CDet6KB1'><PinterestIcon className='w-6 h-6 hover:text-gray-300' /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}