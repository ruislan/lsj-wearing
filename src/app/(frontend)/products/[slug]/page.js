import ProductDetail from "@/components/products/product-detail";
import productModel from '@/models/product';

export default async function Page({ params }) {
  const product = await productModel.getProductBySlug(params.slug);
  return (
    <div className='max-w-screen-2xl w-full mx-auto px-4'>
      <ProductDetail product={product} />
    </div>
  );
}
