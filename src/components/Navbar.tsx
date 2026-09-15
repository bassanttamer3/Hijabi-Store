import "tailwindcss";
import { Search ,ShoppingBasket  } from 'lucide-react';
import { MessageCircleHeart } from 'lucide-react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from "react-router-dom";
function Navbar(){
    
    const { cart, wishlist } = useContext(ShopContext);
  return(
    <>
    <nav className=' flex justify-between items-center text-lg bg-gray-100 shadow-lg rounded-2xl py-10 px-10 '>
<Link to="/" className="text-3xl font-black py-2">
  HI<span className="text-[#E0A0A1]">J</span>ABI
</Link>
        <ul className='flex justify-center items-center gap-4 px-2 font-sm font-medium text-slate-700'>
            <li className='hover:text-[#E0A0A1] transition-colors duration-700'><Link to="/scarves">Scarves</Link></li>
            <li className='hover:text-[#E0A0A1] transition-colors duration-700'><Link to="/khimars">Khimars</Link></li>
            <li className='hover:text-[#E0A0A1] transition-colors duration-700'><Link to="/accessories">Accessories</Link></li>
            <li className='hover:text-[#E0A0A1] transition-colors duration-700'><Link to="/hijabs">Hijabs</Link></li>
        </ul>

        <div className="relative flex items-center">
        <input  className=' bg-white rounded-xl shadow-2xl  py-2   
        outline-none border border-gray-200 focus:border-rose-300
        ' placeholder=" Search... " type="text" />
        <Search className="absolute right-3 w-4 h-4 text-gray-400 pointer-events-none" />
        </div> 
        <div className="flex items-center gap-4">
        
        <Link to="/my-items" className="relative p-1">
          <ShoppingBasket className="w-6 h-6 text-gray-700 hover:text-[#E0A0A1] transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        <Link to="/my-items" className="relative p-1">
          <MessageCircleHeart className="w-6 h-6 text-gray-700 hover:text-[#E0A0A1] transition-colors" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#de9596]  text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </Link>

      </div>
        </nav>
        </>
  );
}
export default Navbar;
