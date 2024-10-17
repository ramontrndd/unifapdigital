import './App.css';
import Usuario from './Usuario'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  /> 
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Página Principal</h1>
      <p>Bem-vindo à sua aplicação!</p>
    </div>
  );
};

export default App;
