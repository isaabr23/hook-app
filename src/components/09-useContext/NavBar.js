import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* da la animacion de resaltar cuando estamos en x pagina activeClassName="active" */}
                    <NavLink exact activeClassName="active" to="./" className="nav-link" aria-current="page"> HomeScreen </NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-link"> AboutScreen </NavLink>
                    <NavLink exact activeClassName="active" to="/login" className="nav-link"> LoginScreen </NavLink>
                </div>
            </div>
        </nav>
    )
}


/* <ul>
        <li>
            <Link to="./"> Home </Link>
        </li>
        <li>
            <Link to="./about"> About </Link>
        </li>
        <li>
            <Link to="./login"> Login </Link>
        </li>
    </ul> 
*/

// Link y NavLink son iguales la diferencia es que al NavLink puedes colocarle una clases si el url coincide con el path