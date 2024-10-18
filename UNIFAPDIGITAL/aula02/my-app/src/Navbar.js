import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="flex justify-between text-2x1 font-bold">
        <h1>Minhas Atividades</h1>
        <ul class="flex flex-row gap-2 p-2">
          <li>
            <Link to="/">Pagina principal</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
