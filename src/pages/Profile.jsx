import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../API/authAPI'; // Assurez-vous que le chemin est correct

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setUser(data); // Assurez-vous que la structure de données correspond
      } catch (err) {
        setError('Erreur lors de la récupération des données.');
        console.error(err); // Pour voir l'erreur dans la console
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Profil utilisateur */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-28 h-28 rounded-full object-cover shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">Membre depuis {user.joined}</p>
          <p className="mt-3 text-gray-700">{user.bio}</p>
        </div>
      </div>

      {/* Articles récents */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mes articles</h3>
        {user.articles.length > 0 ? (
          <ul className="space-y-3">
            {user.articles.map((article) => (
              <li
                key={article.id}
                className="bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition"
              >
                <h4 className="text-lg font-medium text-blue-600">{article.title}</h4>
                <p className="text-sm text-gray-500">{article.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Aucun article publié pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;