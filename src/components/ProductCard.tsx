import { Heart, ShoppingBag } from 'lucide-react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
interface ProductCardProps {
    id?: number;
   title?: string; //optional title property
    name: string;
    price: string | number;
    image: string;
  category?: string; //optional category property
}

function ProductCard({ id, title, name, price, image, category }: ProductCardProps) {
    const { addToCart , addToWishlist , wishlist} = useContext(ShopContext); 
    const product = { 
        id,  
        name,
        price,
        image,
        category
        };
    const isWishlisted = wishlist.some((item) => item.id === id);

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col w-72 overflow-hidden my-6 mx-auto">
      <div className="relative w-full h-80 bg-[#fbf9f9] overflow-hidden flex items-center justify-center p-4">
        {title && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700 shadow-xs z-10">
            {title}
          </span>
        )}

        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-[#E0A0A1] hover:bg-white transition-all duration-300 shadow-xs z-10"
        onClick={()=> addToWishlist(product)}>
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? " fill-[#E0A0A1]" : "text-gray-400"
            }`}
          />
        </button>

         {/*image  */ }
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-[#C58B8C] transition-colors duration-300">
            {name}
          </h3>
          <span className="text-lg font-extrabold text-gray-900 block mt-1">
            ${price}
          </span>
        </div>

        <button className="mt-4 w-full bg-[#4b4545] text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C58B8C] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md"
        onClick={()=> addToCart(product)}>
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;