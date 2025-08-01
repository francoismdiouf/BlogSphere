import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../API/authAPI'; // Chemin correct vers votre fichier

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && email && password) {
      try {
        const userData = { username, email, password };
        await registerUser(userData); // Appel à la fonction d'inscription
        alert('✅ Inscription réussie ! Cliquez sur OK pour vous connecter.');
        navigate('/login');
      } catch (error) {
        setError('❌ Erreur : ' + (error.response?.data?.message || 'Erreur lors de l\'inscription.'));
      }
    } else {
      alert('❌ Erreur : veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Inscription</h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700">Nom d'utilisateur</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
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
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Connectez-vous
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;