import axios from 'axios';

const API_URL_ARTICLES = 'http://localhost:5000/api/articles';

// Fonction pour obtenir tous les articles
export const getAllArticles = async () => {
  const response = await axios.get(API_URL_ARTICLES);
  return response.data;
};

// Fonction pour obtenir un seul article par ID
export const getArticleById = async (id) => {
  const response = await axios.get(`${API_URL_ARTICLES}/${id}`);
  return response.data;
};

// Fonction pour créer un article (authentifié)
export const createArticle = async (articleData) => {
  const token = localStorage.getItem("token");
  
  const response = await axios.post('http://localhost:5000/api/articles', articleData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

// Fonction pour liker
export const likeArticle = async (id, token) => {
  return await axios.post(`${API_URL_ARTICLES}/${id}/like`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Fonction pour disliker
export const dislikeArticle = async (id, token) => {
  return await axios.post(`${API_URL_ARTICLES}/${id}/dislike`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Modifier un article
export const updateArticle = async (id, updatedData, token) => {
  return await axios.put(`${API_URL_ARTICLES}/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Supprimer un article
export const deleteArticle = async (id, token) => {
  return await axios.delete(`${API_URL_ARTICLES}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

