import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

// Import des pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Editor from './pages/Editor';
import Article from './pages/Article';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes publiques */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Routes avec Layout */}
                <Route element={<Layout />}>
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/articles/:id" element={<Article />} /> {/* ✅ Paramètre ID */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
