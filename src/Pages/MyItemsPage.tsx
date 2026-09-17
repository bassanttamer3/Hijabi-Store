function MyItemsPage() {                
    return   ( 
        <>
        <h2 className="text-4xl font-bold flex justify-center mt-8 mb-5 hover:text-[#E0A0A1]">My Item </h2>
        <div className="flex flex-row gap-4 justify-center">
        <button className="border-2 border-black bg-white mt-5 rounded-2xl px-8 py-3 font-medium text-black hover:bg-black hover:text-white transition">
                All
        </button>
        <button className="border-2 border-black bg-white mt-5 rounded-2xl px-8 py-3 font-medium text-black hover:bg-[#E0A0A1] hover:text-white transition hover:border-white ">
                Added To wishlist
        </button>
        <button className="border-2 border-black bg-white mt-5 rounded-2xl px-8 py-3 font-medium text-black hover:bg-black hover:text-white transition">
                Added To Cart
        </button>
        </div>

        </>
        )

        
}
export default MyItemsPage;