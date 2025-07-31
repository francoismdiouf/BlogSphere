import React from 'react';

const Profile = () => {
  const user = {
    name: 'François Diouf',
    bio: 'Développeur web passionné par l’écriture et les technologies modernes.',
    email: 'jean.dupont@example.com',
    joined: 'Avril 2024',
    avatar: 'https://i.pravatar.cc/150?img=5',
    articles: [
      { id: 1, title: 'Créer un blog en React', date: '12 Juin 2025' },
      { id: 2, title: 'Les tendances JavaScript 2025', date: '25 Mai 2025' },
    ],
  };

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
