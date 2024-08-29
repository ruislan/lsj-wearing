import ProductCard from '@/components/products/product-card';
import ProductHighlight from '@/components/products/product-highlight';
import ProductSlide from '@/components/products/product-slide';
import { categoryModel, productModel } from '@/models';

export default async function Page({ searchParams }) {
  const { cat } = searchParams;
  const categories = await categoryModel.getCategories();
  const products = await productModel.getProductsByCategory(cat);
  return (
    <div className='mx-auto flex max-w-screen-2xl w-full flex-col gap-8 px-4 pb-4 md:flex-row text-white'>
      {/* nav */}
      <div className='order-first w-full flex-none md:max-w-[125px]'>
        <nav>
          <h3 className='hidden text-xs text-neutral-500 md:block dark:text-neutral-400'>Collections</h3>
          <ul className='hidden md:block'>
            {categories.map(c => (
              <li className='mt-2 flex text-black dark:text-white' key={c.slug}>
                <a className='w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100' href={`/products?cat=${c.slug}`}>{c.name}</a>
              </li>
            ))}
          </ul>
          <ul className='md:hidden'>
            <div className='relative'>
              <div className='flex w-full items-center justify-between rounded border px-4 py-2 text-sm border-white/30'>
                <div>All</div>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='h-4'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5'></path>
                </svg>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      {/* list */}
      <div className='order-last min-h-screen w-full md:order-none '>
        {products.length > 0 ?
          (<ul className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {products.map(p => (
              <li key={p.slug}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>) :
          (
            <div className='mt-2 w-full text-center text-neutral-400'>
              No products found.
            </div>
          )
        }
      </div>
    </div>
  );
}
