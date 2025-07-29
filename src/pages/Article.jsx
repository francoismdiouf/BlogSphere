import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const fakeArticle = {
  id: "1",
  title: "Comment bien utiliser BlogSphere",
  author: "Jean Dupont",
  date: "28 juillet 2025",
  content: `
    <p>Bienvenue sur BlogSphere ! Cette plateforme vous permet d'écrire, partager et lire des articles inspirants.</p>
    <p>Voici comment tirer le meilleur parti de notre éditeur riche :</p>
    <ul>
      <li>Rédigez avec des titres, images, listes et citations.</li>
      <li>Ajoutez du code pour vos tutoriels techniques.</li>
      <li>Partagez vos réflexions avec la communauté.</li>
    </ul>
    <blockquote>Le blogging est un art qui demande passion et régularité.</blockquote>
  `,
  likes: 42,
  views: 1234,
  comments: [
    { id: 1, author: "Marie", text: "Super article, très clair !" },
    { id: 2, author: "Paul", text: "Merci pour ces conseils." },
  ],
};

const Article = () => {
  const { id } = useParams();

  const article = fakeArticle;

  const [likes, setLikes] = useState(article.likes);
  const [comments, setComments] = useState(article.comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentToAdd = {
      id: comments.length + 1,
      author: "Anonyme",
      text: newComment.trim(),
    };
    setComments([...comments, commentToAdd]);
    setNewComment('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
      {/* Titre */}
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{article.title}</h1>

      {/* Auteur & Date */}
      <div className="text-sm text-gray-600 mb-6 flex justify-between items-center">
        <span>
          Par <strong className="text-blue-600">{article.author}</strong>
        </span>
        <span>{article.date}</span>
      </div>

      {/* Contenu formaté */}
      <article
        className="prose prose-blue max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Likes & Vues */}
      <div className="flex items-center space-x-6 mb-8">
        <button
          onClick={handleLike}
          className="bg-blue-200 text-blue-900 px-4 py-2 rounded hover:bg-blue-300 transition font-semibold"
        >
          👍 Like ({likes})
        </button>
        <span className="text-gray-500 italic">{article.views} vues</span>
      </div>

      {/* Commentaires */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Commentaires ({comments.length})</h2>

        <ul className="mb-6 space-y-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="border border-gray-200 rounded p-4 bg-gray-50 text-gray-700"
            >
              <p>
                <strong className="text-blue-600">{comment.author} :</strong> {comment.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Formulaire nouveau commentaire */}
        <form onSubmit={handleAddComment} className="space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            className="w-full border border-gray-300 rounded px-4 py-2 resize-y focus:ring-2 focus:ring-blue-300 focus:outline-none"
            rows={3}
          />
          <button
            type="submit"
            className="bg-green-200 text-green-900 px-5 py-2 rounded hover:bg-green-300 transition font-semibold"
          >
            Envoyer
          </button>
        </form>
      </section>

      {/* Lien retour */}
      <div className="mt-10 text-center">
        <Link to="/" className="text-blue-600 hover:underline font-semibold">
          ← Retour à l’accueil
        </Link>
      </div>
    </div>
  );
};

export default Article;
