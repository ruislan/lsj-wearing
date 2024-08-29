import Logo from '@/components/logo';

export default async function NotFound() {
    return (
        <div className='m-32 mx-auto flex flex-col w-full max-w-2xl'>
            <Logo size='lg' />
            <h2 className='text-2xl font-bold mt-8 mb-4'>404</h2>
            <p className='text-lg'>Not Found</p>
        </div>
    );
}