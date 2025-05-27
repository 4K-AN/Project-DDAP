import React from 'react';
import Navbar from '@/components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#155263' }}>
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            {/* Logo placeholder - replace src with your actual logo path */}
            <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center border-4 border-white shadow-lg" style={{ backgroundColor: '#FFC93C' }}>
              <img 
                src="../public/image-Upload/png/Logo.png" 
                alt="GKMeal Logo" 
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div className="text-3xl font-bold hidden" style={{ color: '#155263' }}>
                GK<span style={{ color: '#FF9A3C' }}>Meal</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span style={{ color: '#FF9A3C' }}>GKMeal</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Revolusi cara mahasiswa memesan makanan di kampus dengan platform yang cepat, mudah, dan efisien
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 201, 60, 0.9)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#155263' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#155263' }}>Cerita Kami</h2>
            <p className="leading-relaxed" style={{ color: '#155263' }}>
              GKMeal lahir dari pengalaman pribadi mahasiswa yang sering menghabiskan waktu berharga untuk mengantri di kantin GKM. 
              Kami memahami betapa pentingnya efisiensi waktu dalam kehidupan akademik yang padat, sehingga menciptakan solusi digital 
              yang memungkinkan mahasiswa untuk memesan makanan tanpa harus meninggalkan aktivitas belajar mereka.
            </p>
          </div>

          {/* Our Mission */}
          <div className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 154, 60, 0.9)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#155263' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#155263' }}>Misi Kami</h2>
            <p className="leading-relaxed" style={{ color: '#155263' }}>
              Memberikan pengalaman pemesanan makanan yang seamless dan user-friendly untuk komunitas mahasiswa. 
              Kami berkomitmen untuk terus berinovasi dalam menyediakan layanan yang tidak hanya menghemat waktu, 
              tetapi juga meningkatkan kualitas hidup mahasiswa di lingkungan kampus.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="rounded-2xl p-8 shadow-lg mb-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#155263' }}>
            Mengapa Memilih <span style={{ color: '#FF9A3C' }}>GKMeal?</span>
            
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(255, 201, 60, 0.3)' }}>
                <svg className="w-10 h-10" style={{ color: '#155263' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#155263' }}>Hemat Waktu</h3>
              <p style={{ color: '#155263' }}>
                Tidak perlu mengantri lagi! Pesan makanan sambil belajar, coding, atau mengerjakan tugas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(255, 154, 60, 0.3)' }}>
                <svg className="w-10 h-10" style={{ color: '#155263' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#155263' }}>Mudah Digunakan</h3>
              <p style={{ color: '#155263' }}>
                Interface yang intuitif dan responsif, dirancang khusus untuk kemudahan mahasiswa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(255, 201, 60, 0.3)' }}>
                <svg className="w-10 h-10" style={{ color: '#155263' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#155263' }}>Dibuat untuk Mahasiswa</h3>
              <p style={{ color: '#155263' }}>
                Memahami kebutuhan dan lifestyle mahasiswa modern yang dinamis dan produktif.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(255, 201, 60, 0.8), rgba(255, 154, 60, 0.8))' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#155263' }}>Visi Kami</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: '#155263' }}>
            Menjadi platform food ordering terdepan di lingkungan kampus yang tidak hanya menyediakan kemudahan, 
            tetapi juga menciptakan ekosistem digital yang mendukung produktivitas dan kesejahteraan mahasiswa. 
            Kami percaya bahwa teknologi harus mempermudah hidup, bukan memperumit.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full text-sm font-medium shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#155263' }}>
              🚀 Inovasi
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#155263' }}>
              ⚡ Efisiensi
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#155263' }}>
              🎯 Fokus pada User
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#155263' }}>
              🤝 Komunitas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;