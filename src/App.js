import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import './styles/images.scss';
import myImage from './images/1.gif';

// Sample Components for each page
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>This is the About page.</p>
  </div>
);

const Services = () => (
  <div>
    <h2>Services</h2>
    <p>Here are the services we offer.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Get in touch with us!</p>
  </div>
);

const AboutUs = () => (
  <div>
    <h2>About Us</h2>
    <p>Learn more about our team and mission.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Duh</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </nav>
        <br />
        <div>
          <img src={myImage} style={{ borderRadius: '8px' }} alt="Example" />
        </div>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
