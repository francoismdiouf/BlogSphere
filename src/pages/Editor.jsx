import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      alert("Vous devez être connecté pour publier un article.");
      return navigate('/login');
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/articles',
        { title, content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // ✅ Rediriger directement vers la page du nouvel article
      navigate(`/articles/${response.data._id}`);
    } catch (error) {
      console.error('Erreur publication :', error.response?.data || error.message);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Créer un nouvel article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre de l'article"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenu de l'article"
          className="w-full border p-2 h-64 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Publier
        </button>
      </form>
    </div>
  );
};

export default Editor;
