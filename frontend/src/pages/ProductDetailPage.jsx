import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productApi } from '../api/client';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    productApi.getById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-8 text-gray-500">Loading...</p>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Product image */}
      <img
        src={product.imageUrl || 'https://placehold.co/500x667'}
        alt={product.name}
        className="w-full object-cover"
      />

      {/* Product details */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-400">
          {product.stockQuantity > 0
            ? `${product.stockQuantity} in stock`
            : 'Out of stock'}
        </p>

        <button
          onClick={() => addToCart(product)}
          disabled={product.stockQuantity === 0}
          className="bg-black text-white py-3 px-6 uppercase tracking-wide text-sm
                     hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed mt-4"
        >
          Add to Cart
        </button>
      </div>

    </main>
  );
}
