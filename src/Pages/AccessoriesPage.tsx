import ProductCard from "../components/ProductCard";
import productsData from '../data/products.json';
import type { IProduct } from '../common/interfaces/product.interface';

function AccessoriesPage() {
   const allProducts = productsData as IProduct[];

    const accessories = allProducts.filter(item => item.category === 'accessories');  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Accessories Page</h1>
       <div className="flex flex-wrap gap-8 justify-center">
        {accessories.map((accessory) => (
            <ProductCard key={accessory.id} {...accessory} category="accessories" />
        ))}
    </div>
    </div>
  );
}       
export default AccessoriesPage;