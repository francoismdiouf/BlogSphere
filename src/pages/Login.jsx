import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../API/authAPI';

const API_URL_AUTH = 'http://localhost:5000/api/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await loginUser({ email, password });

      // localstorage
      //token username, email
      const { token, username } = response;
      
      console.log("🎯 Token extrait :", token);
      console.log("👤 Utilisateur extrait :", username);

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(username));

      console.log("Response", response);
      
      alert('✅ Connexion réussie !');
      navigate('/dashboard'); // Redirection vers le tableau de bord
      
    } catch (err) {
      setMessage('❌ ' + (err.response?.data?.message || 'Erreur lors de la connexion.'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Connexion</h2>

        {message && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Pas encore inscrit ?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Créez un compte
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;