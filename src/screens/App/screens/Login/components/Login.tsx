import React from 'react';
import './Login.css';

// import loginPicture from 'assets/loginPicture.jpg';

const Login: React.FC = () => {
  return (
    <div className="login">
      <main className="login__main">
        <h1>Happening now</h1>
        <p>Join Yeller today.</p>
        <button>btn1</button>
        <button>btn2</button>
        <div className="login__or-container">
          <div className="login__decorative-line-container">
            <div className="login__decorative-line"></div>
          </div>
          <span className="login__or-text">or</span>
          {/* <div>
            {' '}
            or
            <span>or</span>
          </div> */}
          <div className="login__decorative-line-container">
            <div className="login__decorative-line"></div>
          </div>
        </div>
        <button>btn3</button>
      </main>
      <div className="login__art-container">
        <div
          className="login__picture"
          // style={{
          //   backgroundImage: `url(${loginPicture})`,
          // }}
        ></div>
        {/* <img src={loginPicture} alt="what's happening text" /> */}
        <div>icon here</div>
      </div>
      <footer>
        <ul className="login__other-links">
          <li>About</li>
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </footer>
    </div>
  );
};

export default Login;
