import './Navbar.css';
import {BasicDemo} from '../../Navbar/data';
import {start}from '../../Navbar/data';
import {end} from '../../Navbar/data';

export default function Navbar(){
  return (
    <header>
          <nav className="navbar" model={BasicDemo} start={start} end={end}>
      <div className="navbar-logo">
        {/* Your Logo */}
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </header>

  );
}
