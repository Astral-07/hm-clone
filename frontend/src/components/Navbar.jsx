import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const categories = ['Women', 'Men', 'Kids', 'Sale'];

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-3">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight text-black">
          H&M
        </Link>

        {/* Category links */}
        <div className="flex gap-8">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wide hover:underline"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-6">
          {user ? (
            <button onClick={logout} className="text-sm hover:underline">
              Sign out
            </button>
          ) : (
            <Link to="/login" className="text-sm hover:underline">
              Sign in
            </Link>
          )}

          {/* Cart icon with item count badge */}
          <Link to="/cart" className="relative">
            <span className="text-xl">🛍</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs
                               w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}
