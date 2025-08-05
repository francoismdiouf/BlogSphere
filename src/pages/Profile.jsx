// Profile.jsx
import React, { useEffect, useState } from 'react';
import { profileUser } from '../API/authAPI';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    const fetchUser = async () => {
      try {
        const userData = await profileUser(token);
        setUser(userData);
      } catch (err) {
        console.error('Erreur lors du chargement du profil :', err);
      }
    };

    if (token) {
      fetchUser();
    }
  }, []);

  if (!user) {
    return <p className="text-center py-10 text-gray-600">Chargement du profil...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Profil utilisateur */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
        <img
          src={user.avatar || 'https://i.pravatar.cc/150?img=5'}
          alt="avatar"
          className="w-28 h-28 rounded-full object-cover shadow"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-sm text-gray-500 mt-1">Membre depuis {user.joined || 'Date inconnue'}</p>
          <p className="mt-3 text-gray-700">{user.bio || 'Aucune biographie'}</p>
        </div>
      </div>

      {/* Articles récents */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mes articles</h3>
        {user.articles && user.articles.length > 0 ? (
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
