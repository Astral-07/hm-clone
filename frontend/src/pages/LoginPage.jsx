import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await authApi.login(email, password);
      login(res.data);
      navigate('/');
    } catch {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <main className="max-w-sm mx-auto px-4 py-16">

      <h1 className="text-2xl font-bold mb-8 text-center">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="underline text-black">Create one</Link>
      </p>

    </main>
  );
}
