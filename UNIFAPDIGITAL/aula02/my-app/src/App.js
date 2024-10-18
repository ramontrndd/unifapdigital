import { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeProvider, { useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario" element={<API />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const API = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }

        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Ocorreu um erro requisição ' + error.message);
      });
  }, []);
  if (loading)
    return <div className="bg-gray-900 text-white">Carregando...</div>;
  if (error) return <div className="bg-gray-900 text-white">{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-gray-900 text-3xl mb-3">Posts</h1>
      <ul className="space-y-2 ">
        {post.map((post) => (
          <li key={post.id} className="bg-gray-100 p-5 rounded-md">
            <h2 className="text-xl font-bold">
              {post.id}.{post.title}{' '}
            </h2>
            <p className="text-md">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <div
      className={`flex  flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900 text-white transition-all duration-500' : 'bg-white text-gray-900 transition-all duration-500'}`}
    >
      <h1 className="text-2x1 m-10 text-blue-600">Página Principal</h1>
      <p className="text-2x1 m-10 text-blue-600">Bem-vindo à sua aplicação!</p>

      <button
        onClick={toggleTheme}
        className=" mt-2 border-transparent border rounded-lg text-sm p-5 bg-purple-500 font-bold uppercase"
      >
        Mudar para tema {isDarkMode ? 'claro' : 'escuro'}
      </button>
    </div>
  );
};

export default App;
