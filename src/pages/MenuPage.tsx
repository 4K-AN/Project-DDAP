import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Store } from 'lucide-react';

// Define a type for the position object to fix the TypeScript error
interface PositionStyle {
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
}

const MenuPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Store data with better descriptions
  const stores = [
    { 
      id: 1, 
      name: "STORE 1", 
      description: "Toko premium kami dengan koleksi lengkap peralatan dapur kualitas terbaik", 
      image: "../public/Image-Upload/jpg/store1.jpg" 
    },
    { 
      id: 2, 
      name: "STORE 2", 
      description: "Outlet yang menyediakan berbagai jenis pisau dan peralatan memotong", 
      image: "/Image-Upload/jpg/yapguez.jpg"
    },
    { 
      id: 3, 
      name: "STORE 3", 
      description: "Gerai utama dengan area demo memasak dan konsultasi chef", 
      image: "../public/Image-Upload/jpg/store2.jpg" 
    },
    { 
      id: 4, 
      name: "STORE 4", 
      description: "Toko khusus alat dapur modern dan teknologi memasak terkini", 
      image: "../public/Image-Upload/jpg/store4.jpg" 
    },
    { 
      id: 5, 
      name: "STORE 5", 
      description: "Outlet premium dengan layanan khusus dan produk eksklusif", 
      image: "../public/Image-Upload/jpg/store5.jpg" 
    }
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/Image-Upload/png/Menu.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center font-display drop-shadow-lg">
            Our Stores
          </h1>
          
          {/* Mobile view - Vertical stack */}
          <div className="md:hidden space-y-6">
            {stores.map((store) => (
              <div 
                key={store.id}
                className="bg-white/90 backdrop-blur-md rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all hover:scale-[1.02] hover:shadow-2xl"
                onClick={() => navigate(`/store/${store.id}`)}
              >
                <div className="p-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
                  <h3 className="font-bold text-xl font-display">{store.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{store.description}</p>
                </div>
                <div className="h-48 overflow-hidden">
                  {store.image ? (
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover"
                    /> 
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Store className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div> 
          
          {/* Desktop view - Grid layout yang rapi */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stores.map((store) => (
              <div 
                key={store.id}
                className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:bg-white group"
                onClick={() => navigate(`/store/${store.id}`)}
              >
                <div className="relative">
                  <div className="h-56 overflow-hidden">
                    {store.image ? (
                      <img 
                        src={store.image} 
                        alt={store.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <Store className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {store.name}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {store.description}
                  </p>
                  <div className="mt-4 flex items-center text-teal-600 font-semibold text-sm group-hover:text-teal-800 transition-colors">
                    <span>Kunjungi Store</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;