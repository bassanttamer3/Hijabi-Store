import { Heart, ShoppingBag, ScanFace } from 'lucide-react';
import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import type { IProduct } from '../common/interfaces/product.interface';

function ProductCard({
  id,
  title,
  price,
  category,
  description,
  colorHex,
  images
}: IProduct) {
  type SkinTone = "light" | "lightMedium" | "mediumTan" | "deep";
  const { addToCart, addToWishlist, wishlist } = useContext(ShopContext); 
  
  const currentProduct: IProduct = {
    id,
    title,
    price,
    category,
    description,
    colorHex,
    images
  };

  const isWishlisted = wishlist.some((item) => item.id === id);
  const [selectedSkinTone, setSelectedSkinTone] = useState<SkinTone>("light");
  
  // edited: state للتحكم في ظهور أو إخفاء قائمة درجات البشرة
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col w-72 overflow-hidden my-6 mx-auto">
      <div className="relative w-full h-90 bg-[#fbf9f9] overflow-hidden flex items-center justify-center p-4">
        <div className='absolute top-2 right-2 flex items-center gap-2 z-10'> 
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-[#E0A0A1] hover:bg-white transition-all duration-300 shadow-xs z-10"
          onClick={()=> addToWishlist(currentProduct)}>
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? " fill-[#E0A0A1]" : "text-gray-400"
              }`}
            />
          </button>

          <div className="relative">
            <button 
              className="p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-[#E0A0A1] hover:bg-white transition-all duration-300 shadow-xs z-10 flex items-center justify-center"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <ScanFace className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 p-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 z-20">
                
                <button
                  title="Light"
                  onClick={() => {
                    setSelectedSkinTone("light");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-5 h-5 rounded-full bg-[#F5D0B1] border-2 transition-all ${
                    selectedSkinTone === "light" ? "border-[#C58B8C] scale-110" : "border-white"
                  }`}
                />

                <button
                  title="Light Medium"
                  onClick={() => {
                    setSelectedSkinTone("lightMedium");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-5 h-5 rounded-full bg-[#E5B590] border-2 transition-all ${
                    selectedSkinTone === "lightMedium" ? "border-[#C58B8C] scale-110" : "border-white"
                  }`}
                />

                <button
                  title="Medium Tan"
                  onClick={() => {
                    setSelectedSkinTone("mediumTan");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-5 h-5 rounded-full bg-[#C68B59] border-2 transition-all ${
                    selectedSkinTone === "mediumTan" ? "border-[#C58B8C] scale-110" : "border-white"
                  }`}
                />

                <button
                  title="Deep"
                  onClick={() => {
                    setSelectedSkinTone("deep");
                    setIsDropdownOpen(false);
                  }}
                  className={`w-5 h-5 rounded-full bg-[#8D5524] border-2 transition-all ${
                    selectedSkinTone === "deep" ? "border-[#C58B8C] scale-110" : "border-white"
                  }`}
                />

              </div>
            )}
          </div>
        </div>
          
        {/* image */}
        <img 
          src={images?.[selectedSkinTone]}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-[#C58B8C] transition-colors duration-300">
            {title}
          </h3>
          <span className="text-lg font-extrabold text-gray-900 block mt-1">
            ${price}
          </span>
        </div>

        <button className="mt-4 w-full bg-[#4b4545] text-white font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C58B8C] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md"
        onClick={()=> addToCart(currentProduct)}>
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;