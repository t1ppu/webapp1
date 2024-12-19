import logo from './logo.svg';
import './App.css';
import './styles/main.scss';

function App() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Sample Header</a>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#aboutus">About Us</a></li>
      </ul>
    </nav>
  );
}


export default App;
