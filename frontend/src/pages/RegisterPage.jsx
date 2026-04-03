import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await authApi.register(
        form.email, form.password, form.firstName, form.lastName
      );
      login(res.data);
      navigate('/');
    } catch {
      setError('Registration failed. Email may already be in use.');
    }
  };

  return (
    <main className="max-w-sm mx-auto px-4 py-16">

      <h1 className="text-2xl font-bold mb-8 text-center">Create Account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last name"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-gray-800"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="underline text-black">Sign in</Link>
      </p>

    </main>
  );
}
