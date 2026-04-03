import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../api/client';
import ProductCard from '../components/ProductCard';

export default function ProductListingPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    productApi.getByCategory(slug)
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold capitalize mb-8">{slug}</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

    </main>
  );
}
