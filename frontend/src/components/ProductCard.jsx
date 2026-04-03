import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group cursor-pointer">

      {/* Product image */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden bg-gray-100 aspect-[3/4]">
          <img
            src={product.imageUrl || 'https://placehold.co/400x533'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-0.5">${product.price}</p>

        {/* Add to cart button — appears on hover */}
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-black text-white text-xs py-2 px-4
                     opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to cart
        </button>
      </div>

    </div>
  );
}
