import ProductCard from "../components/ProductCard";
import productsData from '../data/products.json';
import type { IProduct } from '../common/interfaces/product.interface';

function ScarvesPage() {
    const allProducts = productsData as IProduct[];

    const scarves = allProducts.filter(item => item.category === 'scarves');  
    return (    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-5 mt-10">Scarves Collection</h1>
        <div className="flex flex-wrap gap-8 justify-center">
        {scarves.map((scarf) => (
            <ProductCard key={scarf.id} {...scarf} />
        ))}
    </div>

    </div>
  );
}   
export default ScarvesPage;

