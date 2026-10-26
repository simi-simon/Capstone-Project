import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return <header className="navbar"><Link className="brand" to="/">URBAN<span>_BRAIN</span></Link>
    <nav><NavLink to="/">HOME</NavLink><a href="#about">ABOUT</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a></nav>
  </header>;
}
