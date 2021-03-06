import React from 'react';
import Post from 'shared/components/Post';
import './Home.css';

import iconHouse from 'assets/iconHouseMinifiedCropped.svg';
import iconMagnifyingGlass from 'assets/iconMagnifyingGlass2MinifiedCropped.svg';
import iconBell from 'assets/iconBellMinifiedCropped.svg';
import iconEnvelope from 'assets/iconEnvelopMinifiedCropped.svg';
import iconStars from 'assets/iconStars2MinifiedCropped.svg';
import iconLogo from 'assets/yellerBirdGrey.svg';
import iconBookmarks from 'assets/iconBookmarksMinifiedCropped.svg';
import iconLists from 'assets/iconListsMinifiedCropped.svg';
import iconProfile from 'assets/iconProfileMinifiedCropped.svg';

import profilePic from 'assets/defaultProfilePic.jpg';
import Button from 'shared/components/Button';

const Home: React.FC = () => {
  return (
    <div className="home">
      <aside className="home__aside home__hidden-in-first-two-views">
        <div className="home__aside-section">Search Twitter</div>
        <div className="home__aside-section">What's happening</div>
        <div className="home__aside-section">Who to follow</div>
      </aside>
      <main className="home__main">
        <div className="home__top">
          <div className="home__title-container">
            <div className="home__title-profile-icon-and-title">
              <div className="home__user-profile-icon home__hidden-in-desktop-view">
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

          <div className="home__new-post-container">
            <div className="home__new-post-user-profile-icon">
              <img
                className="home__profile-pic"
                src={profilePic}
                alt="profile"
              />
            </div>
            <div className="home__new-post-main">
              <input
                type="text"
                placeholder="What's happening?"
                className="home__new-post-text"
              />

              <div className="home__new-post-who-can-reply-container">
                <div>worldicon</div>
                <div>Everyone can reply</div>
              </div>

              <div className="home__new-post-button-container">
                <div className="home__new-post-icon-button-container">
                  <div>btn1</div>
                  <div>btn1</div>
                  <div>btn1</div>
                  <div>btn1</div>
                  <div>btn1</div>
                </div>

                <Button
                  buttonClassName="home__new-post-button"
                  buttonType="login-secondary"
                  buttonText="YELL"
                />
              </div>
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
            <img
              src={iconBookmarks}
              alt="bookmarks"
              className="home__nav-icon"
            />
          </div>
          <div className="home__nav-icon-container home__sometimes-hidden">
            <img src={iconLists} alt="lists" className="home__nav-icon" />
          </div>
          <div className="home__nav-icon-container home__sometimes-hidden">
            <img src={iconProfile} alt="profile" className="home__nav-icon" />
          </div>

          <div className="home__post-button">+</div>
        </nav>
      </div>
    </div>
  );
};

export default Home;
