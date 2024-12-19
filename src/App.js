import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import './styles/images.scss';
import myImage from './images/1.gif';

function App() {
  return (
    <div className="App">
      <nav className="navbar" style = {{backgroundImage: {myImage}}}>
        <a href="/" className="navbar-brand">Sample Header</a>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#aboutus">About Us</a></li>
        </ul>
      </nav>
      <br></br>
      <div> 
        <img src={myImage} style={{borderRadius: '8px' }}/>
      </div>
    </div>
  );
}


export default App;
