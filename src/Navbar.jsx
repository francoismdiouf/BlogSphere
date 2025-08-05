import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icônes burger & close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="barnav">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BlogSphere
        </Link>

        {/* Menu burger (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Liens (desktop) */}
        <div className="hidden md:flex space-x-6 text-lg 18px">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
          <Link to="/editor" className="text-gray-700 hover:text-blue-600">Éditeur</Link>
          <Link to="/article" className="text-gray-700 hover:text-blue-600">Article</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profil</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Se Connecter</Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600">Inscription</Link>
        </div>
      </div>

      {/* Liens (mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-4 pb-4">
          <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Accueil</Link>
          <Link to="/editor" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Éditeur</Link>
          <Link to="/article" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Article</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/profile" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Profil</Link>
          <Link to="/login" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Connexion</Link>
          <Link to="/register" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Inscription</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
