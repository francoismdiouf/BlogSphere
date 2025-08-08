import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const token = localStorage.getItem('token');

  // Charger tous les articles de l'utilisateur connecté
  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/articles', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Si tu veux juste les articles de l'utilisateur :
      const userId = localStorage.getItem('userId'); // à mettre lors du login
      const userArticles = res.data.filter(article => article.authorId === userId);

      setArticles(userArticles);
    } catch (err) {
      console.error('Erreur récupération articles :', err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleNewArticle = () => {
    navigate('/editor');
  };

  const handleEdit = (id) => {
    navigate(`/editor/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setArticles(prev => prev.filter(article => article._id !== id));
    } catch (err) {
      console.error('Erreur suppression article :', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Mon Tableau de Bord</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">Vous avez publié {articles.length} article(s).</p>
        <button
          onClick={handleNewArticle}
          className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
        >
          + Nouvel article
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        {articles.map((article) => (
          <div
            key={article._id}
            className="border-b last:border-b-0 pb-4 last:pb-0 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <p className="text-sm text-gray-500">
                Publié le {new Date(article.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-4 mt-2 md:mt-0 text-gray-600 text-sm">
              <span>👁 {article.views || 0}</span>
              <span>❤️ {article.likes || 0}</span>
              <button onClick={() => handleEdit(article._id)} className="text-blue-600 hover:underline">
                Modifier
              </button>
              <button onClick={() => handleDelete(article._id)} className="text-red-500 hover:underline">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
