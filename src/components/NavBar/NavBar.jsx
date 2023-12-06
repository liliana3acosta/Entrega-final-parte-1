import "./NavBar.css"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/items">
            Inicio
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Álbumes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Canciones</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Artistas</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/"> 
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
