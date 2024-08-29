import ProductHighlight from '@/components/products/product-highlight';
import ProductSlide from '@/components/products/product-slide';
import productModel from '@/models/product';

export default async function Home() {
  const highlightProducts = await productModel.getHighlightProducts();
  const recommendProducts = await productModel.getRecommendProducts();
  return (
    <>
      <ProductHighlight products={highlightProducts} />
      <ProductSlide products={recommendProducts} />
    </>
  );
}
