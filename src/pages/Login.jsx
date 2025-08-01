import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../API/authAPI'; // Ajustez le chemin

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 🔥 pour la redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const userData = { email, password };
        await loginUser(userData); // Appel à la fonction de connexion
        alert("✅ Connexion réussie !");
        navigate('/dashboard'); // Redirection après clic sur OK
      } catch (error) {
        setMessage('❌ Erreur : ' + (error.response?.data?.message || 'Erreur lors de la connexion.'));
      }
    } else {
      setMessage("❌ Veuillez remplir tous les champs.");
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