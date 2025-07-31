import React from 'react';

const userArticles = [
  {
    id: 1,
    title: 'Créer une API REST avec Node.js',
    createdAt: '25 Juillet 2025',
    views: 245,
    likes: 18,
  },
  {
    id: 2,
    title: '5 astuces pour écrire des articles engageants',
    createdAt: '22 Juillet 2025',
    views: 150,
    likes: 9,
  },
];

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Mon Tableau de Bord</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Vous avez publié {userArticles.length} article(s).</p>
        <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          + Nouvel article
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        {userArticles.map((article) => (
          <div
            key={article.id}
            className="border-b last:border-b-0 pb-4 last:pb-0 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <p className="text-sm text-gray-500">Publié le {article.createdAt}</p>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0 text-gray-600 text-sm">
              <span>👁 {article.views}</span>
              <span>❤️ {article.likes}</span>
              <button className="text-blue-600 hover:underline">Modifier</button>
              <button className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
