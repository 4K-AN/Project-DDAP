import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface StoreDetail {
  id: number;
  name: string;
  image: string;     // Gambar utama toko
  bgImage: string;   // Gambar untuk background halaman
  description: string;
  address: string;
  phone: string;
  openingHours: string;
}

const StorePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Tambahkan properti bgImage untuk background masing-masing store
  const storeDetails: Record<string, StoreDetail> = {
    "1": {
      id: 1,
      name: "Snack Overflow",
      image: "/Image-Upload/jpg/store1.jpg",
      bgImage: "/Image-Upload/jpg/store1.jpg",
      description: "Toko premium kami dengan koleksi lengkap peralatan dapur kualitas terbaik.",
      address: "Jl. Pahlawan No. 123, Jakarta",
      phone: "+62 123-456-7890",
      openingHours: "Senin - Sabtu: 09:00 - 21:00"
    },
    "2": {
      id: 2,
      name: "Indomie",
      image: "/Image-Upload/png/4c956da1-19b8-4276-a991-28eb88361a04.png",
      bgImage: "/Image-Upload/png/Lapak Mie Yamin.png",
      description: "Outlet yang menyediakan berbagai jenis pisau dan peralatan memotong.",
      address: "Jl. Sudirman No. 45, Bandung",
      phone: "+62 123-456-7891",
      openingHours: "Senin - Minggu: 10:00 - 22:00"
    },
    "3": {
      id: 3,
      name: "Chicken Jockey",
      image: "/Image-Upload/png/4c956da1-19b8-4276-a991-28eb88361a04.png",
      bgImage: "/Image-Upload/png/Lapak Minuman (1).png",
      description: "Gerai utama dengan area demo memasak dan konsultasi chef.",
      address: "Jl. Gajah Mada No. 67, Surabaya",
      phone: "+62 123-456-7892",
      openingHours: "Senin - Sabtu: 09:00 - 20:00"
    },
    "4": {
      id: 4,
      name: "Beverages",
      image: "/Image-Upload/png/Lapak Minuman (1).png",
      bgImage: "/Image-Upload/jpg/store1.jpg",
      description: "Toko khusus alat dapur modern dan teknologi memasak terkini.",
      address: "Jl. Diponegoro No. 89, Semarang",
      phone: "+62 123-456-7893",
      openingHours: "Senin - Minggu: 09:00 - 21:00"
    },
    "5": {
      id: 5,
      name: "Noodles and Katsugoi",
      image: "/Image-Upload/png/Lapak Mie Yamin.png",
      bgImage: "/Image-Upload/png/Lapak Mie Yamin.png",
      description: "Outlet premium dengan layanan khusus dan produk eksklusif.",
      address: "Jl. Ahmad Yani No. 34, Medan",
      phone: "+62 123-456-7894",
      openingHours: "Senin - Sabtu: 10:00 - 20:00"
    }
  };

  const store = id ? storeDetails[id] : null;

  // Jika id tidak ditemukan, tampilkan pesan "Store Tidak Ditemukan"
  if (!store) {
    // Gunakan background default (misalnya store1.jpg)
    const defaultBg = "/Image-Upload/jpg/store1.jpg";

    return (
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${defaultBg}')` }}
      >
        <Navbar />

        <div className="container mx-auto px-6 py-30 text-center backdrop-blur-sm bg-white/40 rounded-lg mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-display">
            Store Tidak Ditemukan
          </h1>
          <Button onClick={() => navigate('/menu')} variant="outline">
            Kembali ke Menu
          </Button>
        </div>
      </div>
    );
  }

  // Jika store ditemukan, gunakan bgImage spesifik dan tampilkan detail
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${store.bgImage}')` }}
    >
      <Navbar />

      <div className="container mx-auto px-1 py-16 backdrop-blur-sm bg-white/50 rounded-lg mt-10">
        <Button
          variant="ghost"
          onClick={() => navigate('/menu')}
          className="mb-6 text-foreground"
        >
          <ArrowLeft className="mr-2" />
          Kembali ke Menu
        </Button>

        <div className="bg-white/30 backdrop-blur-md rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-120 md:h-full object-cover"
              />
            </div>
            <div className="p-10 md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-display">
                {store.name}
              </h1>
              <p className="text-lg mb-6 text-foreground/80">
                {store.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Alamat</h3>
                  <p>{store.address}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Telepon</h3>
                  <p>{store.phone}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Jam Operasional</h3>
                  <p>{store.openingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePage;
