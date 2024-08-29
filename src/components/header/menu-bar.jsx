'use client';

import Logo from '../logo';
import Menu from './menu';

export default function MenuBar() {
    return (
        <nav className='relative flex items-center justify-between p-4 lg:px-6'>
            <div className='block flex-none md:hidden'>
                <button className='flex h-11 w-11 items-center justify-center rounded-md border transition-colors md:hidden border-neutral-700 text-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='h-4'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'></path>
                    </svg>
                </button>
            </div>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center gap-2'>
                        <Logo size='sm' />
                        <span className='text-base font-medium uppercase'>LSJ Wearing</span>
                    </div>
                    <div className='hidden gap-6 text-base md:flex md:items-center'>
                        <Menu name='Home' link='/' />
                        <Menu name='Products' link='/products' />
                        <Menu name='About' link='/about' />
                        <Menu name='Contact' link='/contact' />
                    </div>
                </div>
            </div>
        </nav>
    );
}