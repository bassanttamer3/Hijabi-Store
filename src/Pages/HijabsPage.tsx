import ProductCard from "../components/ProductCard";
import productsData from '../data/products.json';
import type { IProduct } from '../common/interfaces/product.interface';

function HijabsPage() {
  const allProducts = productsData as IProduct[];
  const hijabs = allProducts.filter(item => item.category === 'hijabs');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-5 mt-10">Hijabs Collection</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {hijabs.map((hijab) => (
          <ProductCard key={hijab.id} {...hijab} />
        ))}
      </div>
    </div>
  );
}
export default HijabsPage;