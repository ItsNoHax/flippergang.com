import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';
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

const LogoContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 6000,
    },
  },
  exit: {
    opacity: 0,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 1000);
  }

  render() {
    const { visible } = this.state;
    return (
      <div className="flexContainer">
        <img src={FGLogo} alt="" className="Home-img" />
        <PoseGroup>
          {visible && [
            <LogoContainer
              key="logo-container"
              className="Home-logos-container"
            >
              <LogoLink
                src={TwitterLogo}
                link="https://twitter.com/Flipper_Gang"
              />
              <LogoLink
                src={YoutubeLogo}
                link="https://www.youtube.com/channel/UCdYGpwhbx2DtpR5jMPLEIeA"
              />
              <LogoLink src={GithubLogo} link="https://github.com/ItsNoHax" />
            </LogoContainer>,
          ]}
        </PoseGroup>
      </div>
    );
  }
}

export default Home;
