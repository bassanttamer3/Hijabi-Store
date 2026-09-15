import ProductCard from "../components/ProductCard";
import Girl1 from "../assets/Girl1.png";
import Girl2 from "../assets/Girl2.png"
function HijabsPage() {
    const hijabsList = [
        { id: 1, name: "Premium Silk Hijab", title: "Premium Silk Hijab", price: "24.99", image: Girl1 },
        { id: 2, name: "Chiffon Everyday Hijab", title: "Chiffon Everyday Hijab", price: "18.99", image: Girl2 },

    ];
    return (    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-5 mt-10">Hijabs Collection</h1>
        <div className="flex flex-wrap gap-8 justify-center">
        {hijabsList.map((hijab) => (
            <ProductCard
            key={hijab.id}
            id={hijab.id}
            title={hijab.title}
            name={hijab.name}
            price={hijab.price}
            image={hijab.image}
            />
        ))}
    </div>

    </div>
  );
}   
export default HijabsPage;

