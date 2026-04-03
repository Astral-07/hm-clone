import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productApi } from '../api/client';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    productApi.getAll().then(res => setFeatured(res.data.slice(0, 4)));
  }, []);

  return (
    <main>

      {/* Hero banner */}
      <section className="bg-gray-100 h-[70vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">New Arrivals</h1>
          <p className="text-gray-600 mb-6">Discover the latest styles for every season</p>
          <Link
            to="/category/women"
            className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category banners */}
      <section className="grid grid-cols-3 gap-4 max-w-6xl mx-auto px-4 pb-12">
        {['Women', 'Men', 'Kids'].map(cat => (
          <Link
            key={cat}
            to={`/category/${cat.toLowerCase()}`}
            className="bg-gray-200 aspect-square flex items-end p-4 hover:opacity-90"
          >
            <span className="text-xl font-bold">{cat}</span>
          </Link>
        ))}
      </section>

    </main>
  );
}
