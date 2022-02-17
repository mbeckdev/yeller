import React from 'react';
import Post from 'shared/components/Post';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <main className="home__main">
        <div className="home__top">
          <div className="home__title-container">
            <div className="home__title-proile-icon-and-title">
              <div className="home__user-profile-icon">profile icon</div>
              <h1 className="home__title">Home</h1>
            </div>
            <div>stars icon</div>
          </div>
          <div className="home__show-tweets-container">Show 79 Yells</div>
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
      <nav className="home__nav">
        <div className="home__post-button-container">
          <div className="home__post-button">feather</div>
        </div>
        <div>icon1</div>
        <div>icon2</div>
        <div>icon3</div>
        <div>icon4</div>
        <div className="home__sometimes-hidden">icon5</div>
        <div className="home__sometimes-hidden">icon6</div>
        <div className="home__sometimes-hidden">icon7</div>
        <div className="home__sometimes-hidden">icon8</div>
        <div className="home__sometimes-hidden home__tweet-button-icon">
          icon9
        </div>
      </nav>
    </div>
  );
};

export default Home;
