import React from 'react';
import Post from 'shared/components/Post';
import './Home.css';

import iconHouse from 'assets/iconHouseMinifiedCropped.svg';
import iconMagnifyingGlass from 'assets/iconMagnifyingGlass2MinifiedCropped.svg';
import iconBell from 'assets/iconBellMinifiedCropped.svg';
import iconEnvelope from 'assets/iconEnvelopMinifiedCropped.svg';
import iconStars from 'assets/iconStars2MinifiedCropped.svg';
import iconLogo from 'assets/yellerBirdGrey.svg';
// import iconThing from 'assets'

import profilePic from 'assets/defaultProfilePic.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <main className="home__main">
        <div className="home__top">
          <div className="home__title-container">
            <div className="home__title-profile-icon-and-title">
              <div className="home__user-profile-icon">
                <img
                  className="home__profile-pic"
                  src={profilePic}
                  alt="profile"
                />
              </div>
              <h1 className="home__title">Home</h1>
            </div>
            <div className="home__stars-icon-container">
              <img src={iconStars} alt="stars" className="home__stars-icon" />
            </div>
          </div>
          <div className="home__show-tweets-container">Show 791 Yells</div>
        </div>
        <div className="home__feed">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </main>
      <div className="home__nav-container">
        <nav className="home__nav">
          <div className=" home__nav-logo-container home__sometimes-hidden">
            <img src={iconLogo} alt="logo" className="home__nav-icon " />
          </div>

          <div className="home__nav-icon-container">
            <img src={iconHouse} alt="house" className="home__nav-icon" />
          </div>

          <div className="home__nav-icon-container">
            <img
              src={iconMagnifyingGlass}
              alt="magnifying glass"
              className="home__nav-icon"
            />
          </div>
          <div className="home__nav-icon-container">
            <img src={iconBell} alt="house icon" className="home__nav-icon" />
          </div>
          <div className="home__nav-icon-container">
            <img src={iconEnvelope} alt="envelope" className="home__nav-icon" />
          </div>

          <div className="home__nav-icon-container home__sometimes-hidden">
            <img src={iconBell} alt="house icon" className="home__nav-icon" />
          </div>
          <div className="home__nav-icon-container home__sometimes-hidden">
            <img src={iconBell} alt="house icon" className="home__nav-icon" />
          </div>
          <div className="home__nav-icon-container home__sometimes-hidden">
            <img src={iconBell} alt="house icon" className="home__nav-icon" />
          </div>

          <div className="home__post-button">+</div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
