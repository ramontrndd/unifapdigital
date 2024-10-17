import './App.css';
import Usuario from './Usuario'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar'; 
import ThemeProvider,{useTheme} from './ThemeContext';


function App() {




  return (
<ThemeProvider>
    <Router>
   <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}


const Home = () => {

  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <div className={`flex  flex-col items-center justify-center h-screen ${isDarkMode ? 'bg-gray-900 text-white transition-all duration-500': 'bg-white text-gray-900 transition-all duration-500'}`}>
      <h1 className="text-2x1 m-10 text-blue-600">Página Principal</h1>
      <p className="text-2x1 m-10 text-blue-600">Bem-vindo à sua aplicação!</p>

      <button onClick={toggleTheme} className='mt-4 border rounded-lg text-sm p-5 bg-red-400 font-bold uppercase'>
        Mudar para tema {isDarkMode ? 'claro' : 'escuro'}
      </button>

      
    </div>
  );
};

export default App;
