import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1>Minhas Atividades</h1>
            <ul>
                <li>
                    <Link to="/">Pagina principal</Link>
                </li>
                <li>
                    <Link to="/usuario">Usuario</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;