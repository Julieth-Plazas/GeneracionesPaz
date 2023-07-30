import Logo from "../assets/logo.png";
import Home from "../assets/kindergarten.png";
import Admissions from "../assets/pencil.png";
import Us from "../assets/mat.png";
import Gallery from "../assets/blackboard.png";
import Contact from "../assets/paper-plane.png";
import KnowUs from "../assets/boy.png";
import Metodology from "../assets/puzzle.png";
import Services from "../assets/bricks.png";
import Spaces from "../assets/seesaw.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100" data-theme="cupcake">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <img src={Home} alt="icon" width={30} />
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/admisiones">
                <img src={Admissions} alt="icon" width={30} />
                Admisiones
              </Link>
            </li>
            <li>
              <sumary>
                <img src={Us} alt="icon" width={30} />
                Nosotros
              </sumary>
              <ul className="p-2">
                <li>
                  <Link to="/nosotros">
                    <img src={KnowUs} alt="icon" width={25} />
                    Conocenos
                  </Link>
                </li>
                <li>
                  <Link to="/metodologia">
                    <img src={Metodology} alt="icon" width={25} />
                    Metodología
                  </Link>
                </li>
                <li>
                  <Link to="/servicios">
                    <img src={Services} alt="icon" width={25} />
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/espacios">
                    <img src={Spaces} alt="icon" width={25} />
                    Espacios
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/galeria">
                <img src={Gallery} alt="icon" width={30} />
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/contactanos">
                <img src={Contact} alt="icon" width={30} />
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ms-3">
          <img src={Logo} alt="logo" width={47} />
        </Link>
      </div>
      <div className="navbar-center hidden z-40 lg:flex" >
        <ul className="menu menu-horizontal px-1 font-light">
          <li>
            <Link to="/">
              <img src={Home} alt="icon" width={37} />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/admisiones">
              <img src={Admissions} alt="icon" width={37} />
              Admisiones
            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <img src={Us} alt="icon" width={37} />
                Nosotros
              </summary>
              <ul className="p-2">
                <li>
                  <Link to="/nosotros">
                    <img src={KnowUs} alt="icon" width={20} />
                    Conocenos
                  </Link>
                </li>
                <li>
                  <Link to="/metodologia">
                    <img src={Metodology} alt="icon" width={20} />
                    Metodología
                  </Link>
                </li>
                <li>
                  <Link to="/servicios">
                    <img src={Services} alt="icon" width={20} />
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link to="/espacios">
                    <img src={Spaces} alt="icon" width={20} />
                    Espacios
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/galeria">
              <img src={Gallery} alt="icon" width={37} />
              Galeria
            </Link>
          </li>
          <li>
            <Link to="/contactanos">
              <img src={Contact} alt="icon" width={37} />
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/iniciarsesion" className="btn btn-primary me-3">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
