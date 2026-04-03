import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderApi } from '../api/client';

export default function CartPage() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();

  const handleCheckout = async () => {
    if (!user) {
      alert('Please sign in to checkout');
      return;
    }
    try {
      await orderApi.placeOrder({
        items: cartItems.map(item => ({
          product: { id: item.id },
          quantity: item.quantity,
          unitPrice: item.price,
        })),
        totalPrice,
      });
      alert('Order placed successfully!');
      clearCart();
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="text-sm underline">Continue shopping</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">

      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img
                src={item.imageUrl || 'https://placehold.co/80x100'}
                alt={item.name}
                className="w-20 h-24 object-cover"
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-black text-sm"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={handleCheckout}
          className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-gray-800"
        >
          Checkout
        </button>
      </div>

    </main>
  );
}
