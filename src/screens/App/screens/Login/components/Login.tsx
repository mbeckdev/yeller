import React from 'react';
import './Login.css';

import loginPicture from 'assets/loginPicture.jpg';
import yellerBirdGrey from 'assets/yellerBirdGrey.svg';
import yellerBirdWhite from 'assets/yellerBirdWhite.svg';

import Button from 'shared/components/Button';

const Login: React.FC = () => {
  return (
    <div className="login">
      <main className="login__main-container">
        <div className="login__main">
          <img
            className="login__logo"
            src={yellerBirdGrey}
            width="50"
            alt="bird"
          />

          <h1 className="login__title">Happening now</h1>
          <p className="login__tagline">Join Yeller today.</p>
          <Button
            buttonType="login-tertiary"
            buttonText="Sign up with Google"
          />

          <div className="login__or-container">
            <div className="login__decorative-line-container">
              <div className="login__decorative-line"></div>
            </div>
            <span className="login__or-text">or</span>

            <div className="login__decorative-line-container">
              <div className="login__decorative-line"></div>
            </div>
          </div>
          <Button
            buttonType="login-secondary"
            buttonText="Sign up with email"
            buttonClassName="login__button--sign-up"
          />
          <div className="login__by-signing-up">
            By signing up, you agree to the{' '}
            <a className="login__by-signing-up-link" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="login__by-signing-up-link" href="#">
              Privacy Policy
            </a>
            , including{' '}
            <a className="login__by-signing-up-link" href="#">
              Cookie Use.
            </a>
          </div>
          <div className="login__already-have-an-account">
            <div className="login__already-have-an-account-text">
              Already have an account?
            </div>
            <Button
              buttonType="login-primary"
              buttonText="Sign in"
              buttonClassName="login__button--sign-in"
            />
          </div>
        </div>
      </main>
      <div className="login__art-container">
        <div
          className="login__picture"
          style={{
            color: 'red',
            backgroundImage: `url('${loginPicture}')`,
          }}
        ></div>
        <div className="login__logo-overlay-container">
          <img
            className="login__logo-overlay"
            src={yellerBirdWhite}
            alt="logo"
          />
        </div>
      </div>
      <footer>
        <nav className="login__other-links">
          <a className="login__navlink" href="#">
            About
          </a>
          <a className="login__navlink" href="#">
            Help Center
          </a>
          <a className="login__navlink" href="#">
            Terms of Service
          </a>
          <a className="login__navlink" href="#">
            Privacy Policy
          </a>
          <a className="login__navlink" href="#">
            Cookie Policy
          </a>
          <a className="login__navlink" href="#">
            Accessibility
          </a>
          <a className="login__navlink" href="#">
            Ads info
          </a>
          <a className="login__navlink" href="#">
            Blog
          </a>
          <a className="login__navlink" href="#">
            Status
          </a>
          <a className="login__navlink" href="#">
            Careers
          </a>
          <a className="login__navlink" href="#">
            Brand Resources
          </a>
          <a className="login__navlink" href="#">
            Advertising
          </a>
          <a className="login__navlink" href="#">
            Marketing
          </a>
          <a className="login__navlink" href="#">
            Yeller for Business
          </a>
          <a className="login__navlink" href="#">
            Developers
          </a>
          <a className="login__navlink" href="#">
            Directory
          </a>
          <a className="login__navlink" href="#">
            Settings
          </a>
          <p className="login__navlink-copy">&#169; 2022 Yeller, Inc.</p>
        </nav>
      </footer>
    </div>
  );
};

export default Login;
