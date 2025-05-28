import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, ShoppingCart, Star, Clock } from 'lucide-react';

// Food item type definition
interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  priceNumber: number;
  image: string;
  category: 'food' | 'drink';
  restaurantId: number;
  rating?: number;
  cookTime?: string;
}

// Cart item type
interface CartItem {
  id: number;
  quantity: number;
}

const FoodListPage = () => {
  // State for cart
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'food' | 'drink'>('all');

  // Food items data with restaurant assignments
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Onigiri",
      description: "Onigiri Nenek Sumi dari Kampung Jambu, dibentuk dengan doa dan cinta. Nasi kepal isi tuna pedas, dibungkus nori, konon resepnya dari leluhur pelaut, kini hadir di kantin ini.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 139.png",
      category: "food",
      restaurantId: 1,
      rating: 4.8,
      cookTime: "5 min"
    },
    {
      id: 2,
      name: "Mie Lidi",
      description: "Mie Lidi Kang Udin dari Gang Mawar, camilan renyah yang tercipta dari eksperimen malam di warung kecil. Mie tipis digoreng krispi dengan taburan bumbu pedas manis, kini jadi favorit di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/image 141.png",
      category: "food",
      restaurantId: 1,
      rating: 4.6,
      cookTime: "3 min"
    },
    {
      id: 3,
      name: "Tahu Isi",
      description: "Tahu isi goreng adalah camilan berbahan dasar tahu yang diisi sayuran, lalu dibalut adonan tepung dan digoreng hingga renyah.",
      price: "Rp5.000",
      priceNumber: 5000,
      image: "../public/Image-Upload/png/image 149.png",
      category: "food",
      restaurantId: 1,
      rating: 4.5,
      cookTime: "7 min"
    },
    {
      id: 4, 
      name: "Sushi",
      description: "Sushi adalah makanan Jepang yang terdiri dari nasi yang dibentuk bersama lauk (neta) berupa makanan laut, daging, sayuran mentah atau sudah dimasak.",
      price: "Rp15.000",
      priceNumber: 15000,
      image: "../public/Image-Upload/png/image 138.png",
      category: "food",
      restaurantId: 1,
      rating: 4.9,
      cookTime: "10 min"
    },
    {
      id: 5,
      name: "Air Mineral",
      description: "Air Mineral Mbok Darmi dari Kampung Cempaka, kesegaran murni dari mata air desa. Dibotolkan dengan tangan penuh doa sejak zaman krisis air, kini hadir menyejukkan di kantin ini.",
      price: "Rp3.000",
      priceNumber: 3000,
      image: "../public/Image-Upload/png/image 146.png",
      category: "drink",
      restaurantId: 2,
      rating: 4.3
    },
    {
      id: 6,
      name: "Iced Tea",
      description: "Iced Tea Pak Tarmo dari Jalan Wijaya, racikan legenda yang lahir dari warung pinggir sawah. Teh hitam segar dicampur gula asli dan es batu, menyegarkan jiwa sejak tiga dekade, kini ada di kantin ini.",
      price: "Rp5.000",
      priceNumber: 5000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 152100 2.png",
      category: "drink",
      restaurantId: 2,
      rating: 4.7
    },
    {
      id: 7,
      name: "Pop Ice Taro",
      description: "Pop Ice Taro Juragan Muda dari Pasar Lama, minuman serbuk legendaris yang lahir dari kios kecil di tepi gang. Rasa talas manis nan creamy, diblender dengan es hingga menyegarkan, kini jadi andalan di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 152119 2.png",
      category: "drink",
      restaurantId: 2,
      rating: 4.4
    },
    {
      id: 8,
      name: "Ice Coffee",
      description: "Ice Coffee Mbah Joyo dari Kampung Duren, racikan kopi dingin yang tercipta dari biji pilihan pasar tradisional. Kopi hitam pekat dicampur es dan sedikit gula aren, menyegarkan sejak zaman kakek buyut, kini hadir di kantin ini.",
      price: "Rp10.000",
      priceNumber: 10000,
      image: "../public/Image-Upload/png/Screenshot 2025-04-10 153828 2.png",
      category: "drink",
      restaurantId: 2,
      rating: 4.8
    },
    {
      id: 9,
      name: "Nasi + Ayam Crispy",
      description: "Nasi ayam crispy, nasi hangat dengan ayam goreng renyah berbumbu gurih. Lezat, mengenyangkan, dan pas untuk temani kegiatan kuliahmu!",
      price: "Rp15.000",
      priceNumber: 15000,
      image: "../public/Image-Upload/png/image 153.png",
      category: "food",
      restaurantId: 3,
      rating: 4.9,
      cookTime: "15 min"
    },
    {
      id: 10,
      name: "Nasi + Jamur Crispy",
      description: "Nasi jamur crispy, nasi hangat dengan jamur goreng renyah berbumbu gurih. Lezat, sehat, dan mengenyangkan!",
      price: "Rp12.000",
      priceNumber: 12000,
      image: "../public/Image-Upload/png/image 154.png",
      category: "food",
      restaurantId: 3,
      rating: 4.6,
      cookTime: "12 min"
    },
    {
      id: 11,
      name: "Indomie Goreng",
      description: "Indomie Goreng Bu Tuti dari Pasar Rebo, legenda mie instan yang diracik dengan bumbu rahasia sejak zaman warung kelontong. Mie kenyal dipadu telur, kol, dan sambal pedas, kini menggugah selera di kantin ini.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 151.png",
      category: "food",
      restaurantId: 4,
      rating: 4.7,
      cookTime: "8 min"
    },
    {
      id: 12,
      name: "Indomie Kuah",
      description: "Lagi butuh yang hangat dan mengenyangkan? Indomie Kuah jawabannya! Mi lembut dengan kuah gurih yang bikin nyaman di tengah padatnya kuliah. Tambah telur atau sayur biar makin mantap.",
      price: "Rp7.000",
      priceNumber: 7000,
      image: "../public/Image-Upload/png/image 155.png",
      category: "food",
      restaurantId: 4,
      rating: 4.5,
      cookTime: "8 min"
    },
    {
      id: 13,
      name: "Mie Yamin",
      description: "Mie Yamin istimewa dengan kuah kaya rasa, mie kenyal, dan topping lengkap. Sempurna untuk menghangatkan hari!",
      price: "Rp13.000",
      priceNumber: 13000,
      image: "../public/Image-Upload/png/image 165.png",
      category: "food",
      restaurantId: 5,
      rating: 4.8,
      cookTime: "12 min"
    },
    {
      id: 14,
      name: "Mie Pangsit",
      description: "Mie Pangsit renyah dengan rasa yang kaya rasa. Disajikan dengan hangat yang mengenyangkan.",
      price: "Rp18.000",
      priceNumber: 18000,
      image: "../public/Image-Upload/png/3106c7c0af9e8b0ddeff12332f922dad3eee54ef.png",
      category: "food",
      restaurantId: 5,
      rating: 4.7,
      cookTime: "15 min"
    },
    {
      id: 15,
      name: "Martabak Mini",
      description: "Martabak manis mini adalah kue berbentuk kecil dengan tekstur lembut dan empuk, biasanya diisi cokelat, keju, atau kacang, lalu dilipat dan disajikan sebagai camilan manis.",
      price: "Rp8.000",
      priceNumber: 8000,
      image: "../public/Image-Upload/png/image 166.png",
      category: "food",
      restaurantId: 1,
      rating: 4.4,
      cookTime: "6 min"
    }
  ];

  // Restaurant categories
  const restaurants = [
    { name: "Snack Overflow", id: 1, icon: "🍱", specialty: "Japanese & Snacks" },
    { name: "Lapak Minuman", id: 2, icon: "🥤", specialty: "Fresh Beverages" },
    { name: "Chicken Jockie", id: 3, icon: "🍗", specialty: "Crispy Delights" },
    { name: "Warung Indomie", id: 4, icon: "🍜", specialty: "Instant Noodles" },
    { name: "Noodles and Katsugoi", id: 5, icon: "🍲", specialty: "Traditional Noodles" }
  ];

  // Helper function to get quantity for an item
  const getQuantity = (itemId: number): number => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  // Function to update quantity
  const updateQuantity = (itemId: number, change: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + change;
        if (newQuantity <= 0) {
          return prevCart.filter(item => item.id !== itemId);
        }
        return prevCart.map(item =>
          item.id === itemId 
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else if (change > 0) {
        return [...prevCart, { id: itemId, quantity: 1 }];
      }
      return prevCart;
    });
  };

  // Calculate total items in cart
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce((sum, cartItem) => {
    const foodItem = foodItems.find(item => item.id === cartItem.id);
    return sum + (foodItem ? foodItem.priceNumber * cartItem.quantity : 0);
  }, 0);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(6, 39, 46), rgb(9, 130, 146))`
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6F3C]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-80 right-20 w-24 h-24 bg-[#FFC93C]/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#155263]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-display tracking-tight mb-6 drop-shadow-lg">
              GKMeal Menu
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6F3C] to-[#FFC93C] mx-auto mb-6 rounded-full"></div>
            <p className="mt-4 text-lg sm:text-xl text-[#FFC93C] max-w-3xl mx-auto leading-relaxed">
              Discover delicious meals from FILKOM UB's finest food tenants. From traditional snacks to modern beverages, 
              find your perfect meal right here.
            </p>
          </div>
        </header>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All Items', icon: '🍽️' },
                { key: 'food', label: 'Food', icon: '🍜' },
                { key: 'drink', label: 'Drinks', icon: '🥤' }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.key
                      ? 'bg-[#FF6F3C] text-white shadow-lg scale-105'
                      : 'text-white hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-[#FF6F3C] mb-2">{foodItems.length}</div>
            <div className="text-white/80 text-sm">Menu Items</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-[#FFC93C] mb-2">{restaurants.length}</div>
            <div className="text-white/80 text-sm">Restaurants</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-[#FF6F3C] mb-2">{totalCartItems}</div>
            <div className="text-white/80 text-sm">In Cart</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-[#FFC93C] mb-2">4.7</div>
            <div className="text-white/80 text-sm">Avg Rating</div>
          </div>
        </div>

        {/* Enhanced Cart Summary */}
        {totalCartItems > 0 && (
          <div className="fixed top-24 right-4 bg-[#155263]/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 z-50 max-w-sm border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#FF6F3C] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Your Cart</h3>
                <p className="text-[#FFC93C] text-sm">{totalCartItems} items</p>
              </div>
            </div>
            <div className="border-t border-white/20 pt-4">
              <p className="text-2xl font-bold text-[#FFC93C]">
                Rp{totalPrice.toLocaleString('id-ID')}
              </p>
              <button className="w-full mt-4 bg-[#FF6F3C] text-white py-3 rounded-xl font-semibold hover:bg-[#FF9A3C] transition-all duration-300 hover:scale-105">
                Checkout Now
              </button>
            </div>
          </div>
        )}

        {/* Restaurant Categories */}
        {restaurants.map((restaurant) => {
          const restaurantItems = filteredItems.filter(item => item.restaurantId === restaurant.id);
          
          if (restaurantItems.length === 0) return null;

          return (
            <div key={restaurant.id} className="mb-20">
              {/* Restaurant Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl">{restaurant.icon}</div>
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                      {restaurant.name}
                    </h2>
                    <p className="text-[#FFC93C] text-lg">{restaurant.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Food Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {restaurantItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="overflow-hidden bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-[#FF6F3C]/20 transition-all duration-500 border border-white/20 group hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-48 md:w-2/5 md:h-auto overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop";
                          }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#FF6F3C]/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {item.category === 'food' ? '🍜 Food' : '🥤 Drink'}
                          </span>
                        </div>
                        {item.rating && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                            <Star className="w-4 h-4 text-[#FFC93C] fill-current" />
                            <span className="text-sm font-semibold text-[#155263]">{item.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className="p-6 md:w-3/5 flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-[#155263] group-hover:text-[#FF6F3C] transition-colors duration-300">
                            {item.name}
                          </h3>
                          {item.cookTime && (
                            <div className="flex items-center space-x-1 text-[#155263]/70 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{item.cookTime}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-sm text-[#155263]/70 mb-6 flex-grow leading-relaxed">
                          {item.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <div>
                            <p className="text-2xl font-bold text-[#FF6F3C] mb-1">{item.price}</p>
                            {item.rating && (
                              <div className="flex items-center space-x-1 text-sm text-[#155263]/70">
                                <Star className="w-3 h-3 text-[#FFC93C] fill-current" />
                                <span>{item.rating} rating</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center bg-[#155263]/10 rounded-xl border border-[#155263]/20 overflow-hidden">
                            <button 
                              className="p-3 hover:bg-[#FF6F3C] hover:text-white transition-all duration-300 group/btn"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={getQuantity(item.id) === 0}
                            >
                              <Minus className="h-4 w-4 text-[#155263] group-hover/btn:text-white" />
                            </button>
                            <span className="px-4 py-3 text-lg font-bold min-w-[60px] text-center text-[#155263] bg-white/50">
                              {getQuantity(item.id)}
                            </span>
                            <button 
                              className="p-3 hover:bg-[#FF6F3C] hover:text-white transition-all duration-300 group/btn"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-4 w-4 text-[#155263] group-hover/btn:text-white" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Enhanced Quote Section */}
        <section className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm rounded-2xl"></div>
          <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="text-6xl text-[#FF6F3C]/30 mb-4">"</div>
            <p className="text-2xl sm:text-4xl font-[Rochester] italic text-[#FFC93C] mb-6 leading-relaxed">
              Dari Suapan Pertama, Tersimpul Memori Yang Tak Terlupa
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6F3C] to-[#FFC93C] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F3C]/10 to-[#FFC93C]/10 backdrop-blur-md rounded-2xl border border-white/20"></div>
          <div className="relative z-10 p-8 sm:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-md">
              Find Delicious Favorite Foods at GKMeal!!!
            </h3>
            <p className="text-lg text-[#FFC93C] mb-8 max-w-4xl mx-auto leading-relaxed">
              Enjoy a wide selection of menus from the best tenants at FILKOM UB.
              Check menus, prices, opening hours, and the latest promos easily - all in one place.
              Join our community of food lovers and satisfy your cravings today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">🍽️</div>
                <h4 className="text-white font-semibold mb-2">Quality Food</h4>
                <p className="text-[#FFC93C]/80 text-sm">Fresh ingredients, authentic flavors</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-white font-semibold mb-2">Fast Service</h4>
                <p className="text-[#FFC93C]/80 text-sm">Quick preparation, hot delivery</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl mb-3">💝</div>
                <h4 className="text-white font-semibold mb-2">Great Value</h4>
                <p className="text-[#FFC93C]/80 text-sm">Affordable prices, premium quality</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodListPage;