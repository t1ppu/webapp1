import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './styles/main.scss';
import './styles/images.scss';
import i1 from './images/1.gif';
import i2 from './images/2.gif';
import i3 from './images/3.gif';
import i4 from './images/4.gif';
import Swal from 'sweetalert2';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Sample Components for each page
const Home = () => (
  <div>
  <div>
    <h2>Home</h2>
    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Dont click on the first image</p>
  </div>
  <Swiper
      modules={[Navigation,Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2.5}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img  onClick={() => Swal.fire({
                              title: "Eww!",
                              text: "Dont touch me bro",
                              icon: "error",
})} src={i1} style={{ borderRadius: '8px', width: '500px', height: '450px' }} alt="1" /></SwiperSlide>
      <SwiperSlide><img src={i2} style={{ borderRadius: '8px', width: '500px', height: '450px' }} alt="2" /></SwiperSlide>
      <SwiperSlide><img src={i3} style={{ borderRadius: '8px', width: '500px', height: '450px' }} alt="3" /></SwiperSlide>
      <SwiperSlide><img src={i4} style={{ borderRadius: '8px', width: '500px', height: '450px' }} alt="4" /></SwiperSlide>

    </Swiper>
    <p> &lt;-------------------------------------------------------------------------------------------------------&gt; <h3>Drag to scroll</h3>  </p>
    <div data-aos="zoom-in" style={{backgroundColor: 'gray', padding: '20px', borderRadius: '8px', marginTop: '100px', marginLeft: '400px', marginRight: '400px', fontSize: '20px', alignContent: 'left',}}>
    Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit pulvinar nam porttitor, ad enim quisque. Molestie cursus faucibus; pellentesque mauris libero consequat tristique. Auctor ultrices commodo tortor ornare nam. Eget habitant neque cubilia facilisis, malesuada mollis sem. Nunc tincidunt pharetra maecenas pulvinar tortor lorem curae lectus dapibus. Enim fringilla ut vestibulum vehicula urna, porttitor aliquet auctor placerat.

In varius integer donec maximus condimentum turpis scelerisque. Aliquam felis parturient primis, semper primis feugiat felis purus. Facilisis facilisi justo mollis mi cursus neque imperdiet venenatis. Interdum mus diam semper rhoncus nostra facilisi sodales. Gravida lobortis fusce nulla dolor efficitur sociosqu hendrerit scelerisque. Maximus leo sem; torquent sollicitudin vehicula id aenean. Cras potenti ipsum molestie placerat nibh posuere.

Sagittis est finibus sit fusce felis. Blandit dignissim nulla sed; mi eleifend cras praesent. Dapibus commodo vestibulum rutrum sollicitudin scelerisque tempus lacus nulla ac. Metus laoreet libero donec rhoncus mattis gravida ridiculus fames. Rhoncus curabitur arcu tincidunt nostra faucibus non potenti. Velit senectus odio purus auctor lobortis. Dui ante etiam eu cursus nisi laoreet. Litora potenti posuere suscipit mauris porta inceptos interdum; habitasse sem.
  </div>
  </div>

);

const About = () => (
  <div>
    <h2>About</h2>
    <p>meh meh meh</p>
  </div>
);

const Services = () => (
  <div>
    <h2>Services</h2>
    <p>bleh bleh bleh</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>bleh bleh bleh</p>
  </div>
);

const AboutUs = () => (
  <div>
    <h2>About Us</h2>
    <p>bleh bleh bleh</p>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <a href="/" className="navbar-brand">Playground</a>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </nav>
        <br />

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
