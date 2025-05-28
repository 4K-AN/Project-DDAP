import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<number, boolean>>({});

  // Gallery items with corrected image paths
  const galleryItems = [
    { 
      id: 1, 
      title: "Akhmad Syafiul Anam",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-27 at 21.35.49_462e5574.jpg",
      description: "Workshop participant showcasing culinary creativity"
    },
    { 
      id: 2, 
      title: "Immanuel Issac Hadi",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-27 at 21.59.37_f84a15c3.jpg",
      description: "Passionate coder and food enthusiast"
    },
    { 
      id: 3, 
      title: "Muhammad Hazel Zahran Saleh",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-27 at 21.36.35_22eef5bb.jpg",
      description: "Bringing innovation to every dish"
    },
    { 
      id: 4, 
      title: "Rafi Kamasyamsi",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-27 at 21.38.05_fa8d9147.jpg",
      description: "Master of both code and cuisine"
    },
    { 
      id: 5, 
      title: "Muhammad Alvin Satria",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-25 at 20.13.16_ad57c246.jpg",
      description: "Creative mind behind delicious experiments"
    },
    { 
      id: 6, 
      title: "Hafiz Waliyuddin Akbar",
      image: "../public/image-Upload/jpg/WhatsApp Image 2025-05-27 at 22.01.13_10972b95.jpg",
      description: "Culinary artist and tech innovator"
    },
  ];

  const handleImageError = (id: number) => {
    setImageLoadErrors(prev => ({ ...prev, [id]: true }));
  };

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    } else {
      newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryItems[newIndex].id);
  };

  return (
    <div 
      className="gallery min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(6, 39, 46), rgb(9, 130, 146))`
      }}
    >
      <Navbar />
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6F3C]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-[#FFC93C]/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#155263]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        {/* Enhanced Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-display tracking-tight mb-6 drop-shadow-lg">
              Eat, Code, Repeat
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6F3C] to-[#FFC93C] mx-auto mb-6 rounded-full"></div>
            <p className="mt-4 text-lg sm:text-xl text-[#FFC93C] max-w-3xl mx-auto leading-relaxed">
              Discover the vibrant faces and flavors of our FILKOM UB workshops, where culinary passion meets coding creativity. 
              Each participant brings their unique story to our community.
            </p>
          </div>
        </header>

        {/* Enhanced Carousel Section */}
        <section className="relative mb-20" aria-label="Workshop Participants Carousel">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow-md">
              Meet Our Workshop Stars
            </h2>
            <p className="text-[#FFC93C]/80 text-lg max-w-2xl mx-auto">
              Get to know the talented individuals who make our workshops extraordinary
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div 
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group transition-all hover:scale-105 duration-500 cursor-pointer bg-gradient-to-br from-[#155263]/20 to-[#FF6F3C]/10 backdrop-blur-sm"
                    onClick={() => openLightbox(item.id)}
                  >
                    {!imageLoadErrors[item.id] ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#155263] to-[#098292]">
                        <div className="text-center text-white/70">
                          <div className="w-16 h-16 bg-[#FF6F3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm">Image not available</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Enhanced overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#155263]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-md">{item.title}</h3>
                        <p className="text-[#FFC93C] text-sm opacity-90">{item.description}</p>
                        <div className="mt-3 flex items-center text-white/80 text-xs">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Click to view
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FF6F3C]/80 hover:bg-[#FF6F3C] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FF6F3C]/80 hover:bg-[#FF6F3C] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white/20" />
          </Carousel>
        </section>

        {/* Enhanced Grid Section */}
        <section className="mb-20" aria-label="Participant Gallery">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow-md">
              Gallery Showcase
            </h2>
            <p className="text-[#FFC93C]/80 text-lg max-w-2xl mx-auto">
              Browse through our collection of workshop moments and participant highlights
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#FF6F3C] mb-2">{galleryItems.length}</div>
              <div className="text-white/80 text-sm">Participants</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#FFC93C] mb-2">10+</div>
              <div className="text-white/80 text-sm">Workshops</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#FF6F3C] mb-2">50+</div>
              <div className="text-white/80 text-sm">Dishes Created</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#FFC93C] mb-2">100%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => openLightbox(item.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#155263]/20 to-[#FF6F3C]/10 backdrop-blur-sm border border-white/10">
                  {!imageLoadErrors[item.id] ? (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-80 group-hover:scale-110"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#155263] to-[#098292]">
                      <div className="text-center text-white/70">
                        <div className="w-20 h-20 bg-[#FF6F3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">Image not available</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced overlay with more details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#155263]/95 via-[#155263]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-md">{item.title}</h3>
                      <p className="text-[#FFC93C] text-sm mb-4 opacity-90">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/80 text-xs">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Click to enlarge
                        </div>
                        <div className="w-8 h-8 bg-[#FF6F3C]/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Quote Section */}
        <section className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm rounded-2xl"></div>
          <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <div className="text-6xl text-[#FF6F3C]/30 mb-4">"</div>
            <p className="text-2xl sm:text-4xl font-[Rochester] italic text-[#FFC93C] mb-6 leading-relaxed">
              From the First Bite, Memories Are Made to Last
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6F3C] to-[#FFC93C] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F3C]/10 to-[#FFC93C]/10 backdrop-blur-md rounded-2xl border border-white/10"></div>
          <div className="relative z-10 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 drop-shadow-md">
              Savor the Experience at GKMeal
            </h2>
            <p className="text-lg text-[#FFC93C] mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore a curated selection of delicious dishes from FILKOM UB's finest tenants. 
              Browse menus, check prices, and stay updated on the latest promos—all in one place.
              Join our community of food lovers and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/menu" 
                className="inline-flex items-center px-8 py-4 bg-[#FF6F3C] text-white font-semibold rounded-xl shadow-xl hover:bg-[#FF9A3C] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Explore Menus Now
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#FFC93C] text-[#FFC93C] font-semibold rounded-xl hover:bg-[#FFC93C] hover:text-[#155263] transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Gallery
              </button>
            </div>
          </div>
        </section>
      </div> 

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#FF6F3C]/80 hover:bg-[#FF6F3C] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FF6F3C]/80 hover:bg-[#FF6F3C] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FF6F3C]/80 hover:bg-[#FF6F3C] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {(() => {
              const selectedItem = galleryItems.find(item => item.id === selectedImage);
              return selectedItem ? (
                <div className="bg-[#155263]/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-video w-full bg-gradient-to-br from-[#155263] to-[#098292] flex items-center justify-center">
                    {!imageLoadErrors[selectedItem.id] ? (
                      <img 
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        className="max-w-full max-h-full object-contain"
                        onError={() => handleImageError(selectedItem.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <div className="text-center text-white/70">
                        <div className="w-24 h-24 bg-[#FF6F3C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-xl">Image not available</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{selectedItem.title}</h3>
                    <p className="text-[#FFC93C] text-lg">{selectedItem.description}</p>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;