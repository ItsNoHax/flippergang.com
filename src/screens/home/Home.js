import React from 'react';
import './Home.css';
import FGLogo from '../../assets/fg-logo.gif';
import TwitterLogo from '../../assets/logo-twitter.svg';
import YoutubeLogo from '../../assets/logo-youtube.png';
import GithubLogo from '../../assets/logo-github.svg';

const LogoLink = ({ link, src }) => (
  <a href={link}>
    <img src={src} alt="" className="Home-small-img" />
  </a>
);

const Home = () => (
  <div className="flexContainer">
    <img src={FGLogo} alt="" className="Home-img" />
    <div className="Home-logos-container">
      <LogoLink src={TwitterLogo} link="https://twitter.com/Flipper_Gang" />
      <LogoLink
        src={YoutubeLogo}
        link="https://www.youtube.com/channel/UCdYGpwhbx2DtpR5jMPLEIeA"
      />
      <LogoLink src={GithubLogo} link="https://github.com/ItsNoHax" />
    </div>
  </div>
);

export default Home;
