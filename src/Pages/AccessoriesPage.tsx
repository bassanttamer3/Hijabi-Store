import ProductCard from "../components/ProductCard";
import Girl1 from "../assets/Girl1.png";
function AccessoriesPage() {
      const AccessoriesList = [
            { id: 1, name: "Premium  Accessories", title: "Premium Silk Hijab", price: "24.99", image: Girl1 },
            { id: 2, name: "Everyday Accessories", title: "Chiffon Everyday Hijab", price: "18.99", image: Girl1 },
            { id: 3, name: "Soft Accessories", title: "Modal Soft Hijab", price: "21.99", image: Girl1 },
        ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Accessories Page</h1>
      <p className="text-lg text-gray-600">This is the Accessories page of the e-commerce website.</p>
       <div className="flex flex-wrap gap-8 justify-center">
        {AccessoriesList.map((Accessories) => (
            <ProductCard
            id={Accessories.id}
            key={Accessories.id}
            title={Accessories.title}
            name={Accessories.name}
            price={Accessories.price}
            image={Accessories.image}
            />
        ))}
    </div>
    </div>
  );
}       
export default AccessoriesPage;