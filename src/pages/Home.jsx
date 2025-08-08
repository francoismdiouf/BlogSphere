import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenue sur <span className="text-blue-600">BlogSphere</span>
        </h1>
        <p className="font-medium text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          Partagez vos idées, tutoriels ou réflexions avec une communauté de lecteurs passionnés.
        </p>
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            ✍️ Commencer à écrire
          </button>
        </Link>
      </section>

      {/* Fonctionnalités principales */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Fonctionnalités clés</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="📝" title="Éditeur riche" description="Rédigez avec un éditeur puissant pour structurer vos idées (titres, images, code, citations…)" />
          <FeatureCard icon="💬" title="Commentaires & Likes" description="Interagissez avec les articles en donnant votre avis ou en montrant votre appréciation." />
          <FeatureCard icon="📊" title="Statistiques" description="Suivez la popularité de vos publications (vues, likes, commentaires)." />
        </div>
      </section>

      
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg text-center border">
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-xl font-semibold text-blue-600 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);


export default Home;
