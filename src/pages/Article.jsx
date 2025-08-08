import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const token = localStorage.getItem('token');

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setArticle(response.data);
      setFormData({
        title: response.data.title,
        content: response.data.content,
      });

      // 🔹 Si le backend renvoie directement les commentaires dans `response.data.comments`
      if (response.data.comments) {
        setComments(response.data.comments);
      } else {
        // Sinon on va les chercher séparément
        const resComments = await axios.get(`http://localhost:5000/api/articles/${id}/comments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComments(resComments.data);
      }
    } catch (error) {
      console.error('Erreur chargement article :', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const handleLike = async () => {
    try {
      await axios.post(`http://localhost:5000/api/articles/${id}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticle();
    } catch (error) {
      console.error('Erreur like :', error);
    }
  };

  const handleDislike = async () => {
    try {
      await axios.post(`http://localhost:5000/api/articles/${id}/dislike`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchArticle();
    } catch (error) {
      console.error('Erreur dislike :', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/articles/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditMode(false);
      fetchArticle();
    } catch (error) {
      console.error('Erreur mise à jour :', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/');
    } catch (error) {
      console.error('Erreur suppression :', error);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    try {
      await axios.post(
        `http://localhost:5000/api/articles/${id}/comments`,
        { text: newComment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewComment('');
      fetchArticle(); // 🔄 recharge article + commentaires
    } catch (error) {
      console.error('Erreur ajout commentaire :', error);
    }
  };

  if (!article) return <p>Chargement...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {editMode ? (
        <>
          <input
            className="w-full border p-2 mb-2"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <textarea
            className="w-full border p-2 mb-4"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Enregistrer</button>
          <button onClick={() => setEditMode(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
          <p className="text-gray-700 mb-4">{article.content}</p>
          <p className="text-sm text-gray-500 mb-4">
            👍 {article.likes || 0} | 👎 {article.dislikes || 0}
          </p>

          <div className="flex gap-2 mb-6">
            <button onClick={handleLike} className="bg-green-500 text-white px-3 py-1 rounded">👍 Like</button>
            <button onClick={handleDislike} className="bg-yellow-500 text-white px-3 py-1 rounded">👎 Dislike</button>
            <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-3 py-1 rounded">✏️ Modifier</button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">🗑️ Supprimer</button>
          </div>

          {/* 🔹 Zone commentaires */}
          <div className="border-t pt-4">
            <h2 className="text-lg font-bold mb-2">Commentaires</h2>

            <div className="mb-4">
              {comments.length > 0 ? (
                comments.map((c, index) => (
                  <div key={index} className="border-b py-2">
                    <p className="text-sm"><strong>{c.author || "Anonyme"}</strong> : {c.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Aucun commentaire pour le moment.</p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Écrire un commentaire..."
                className="border p-2 flex-grow rounded"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment} className="bg-blue-500 text-white px-4 py-2 rounded">
                Publier
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
