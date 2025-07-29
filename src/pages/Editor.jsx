import { useState } from 'react';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Envoyer les données à l’API backend
    console.log('Titre:', title);
    console.log('Contenu:', content);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Créer un nouvel article</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-xl p-6">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-800 mb-2">
            Titre de l'article
          </label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Écris un titre percutant..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-semibold text-gray-800 mb-2">
            Contenu
          </label>
          <textarea
            id="content"
            rows={12}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Exprime-toi ici..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
          >
            Publier l'article
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
