import ProductCard from "../components/ProductCard";
import productsData from '../data/products.json';
import type { IProduct } from '../common/interfaces/product.interface';

function KhimarsPage() {
    const allProducts = productsData as IProduct[];

const khimars = allProducts.filter(item => item.category === 'khimars');  
  return (    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-5 mt-10">Khimars Collection</h1>
        <div className="flex flex-wrap gap-8 justify-center">
        {khimars.map((khimar) => (
            <ProductCard key={khimar.id} {...khimar} />
        ))}
    </div>

    </div>
  );
}   
export default KhimarsPage;

