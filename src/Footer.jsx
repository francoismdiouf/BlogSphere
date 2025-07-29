import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* BlogSphere */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">BlogSphere</h2>
          <p className="text-sm">
            Plateforme de blogging simple, élégante et collaborative pour écrire, lire et partager vos idées.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Accueil</Link></li>
            <li><Link to="/editor" className="hover:text-white">Éditeur</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/profile" className="hover:text-white">Profil</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Centre d’aide</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Conditions</a></li>
            <li><a href="#" className="hover:text-white">Confidentialité</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-white font-semibold mb-3">Suivez-nous</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">🌐 Site officiel</a></li>
            <li><a href="#" className="hover:text-white">📘 Facebook</a></li>
            <li><a href="#" className="hover:text-white">🐦 Twitter</a></li>
            <li><a href="#" className="hover:text-white">📸 Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} BlogSphere. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
