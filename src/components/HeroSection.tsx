import hijabiImg from '../assets/Girl.png';

function HeroSection() {
  return (
    <div className="flex items-center justify-between gap-8 w-full max-w-7xl mx-auto px-6 mt-12"> 
      
      <div className="flex flex-col items-start gap-4 max-w-lg">
        <h1 className="text-7xl font-extrabold text-slate-900 leading-tight">
          Welcome to our local brand
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          Discover our collection of high-quality products
        </p>
      </div>

      <div className="flex justify-end items-center">
        <img 
          src={hijabiImg} 
          alt="Hero" 
          className="w-95 h-auto rounded-2xl " 
        />
      </div>

    </div>   
  );
}

export default HeroSection;