import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import routeConstants from 'shared/constants/routes';
import birdBlue from 'assets/yellerBirdBlueMinified.svg';

const { LOGIN, HOME, NOTIFICATIONS, PROFILE } = routeConstants;

// import birdGrey from '../../assets/yellerBirdGreyMinified.svg';
// import birdWhite from '../../assets/yellerBirdWhiteMinified.svg';
// import birdBlue from '../../assets/yellerBirdBlueMinified.svg';
// import birdBlueTest from '../../assets/yellerBirdBlueTest.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
          <h1>App Component</h1>
          <img src={birdBlue} height="100" width="100" alt="bird" />
          <ul className="App-nav-list">
            <li className="App-nav-item">
              <Link to={LOGIN.route}>{LOGIN.name}</Link>
            </li>
            <li className="App-nav-item">
              <Link to={HOME.route}>{HOME.name}</Link>
            </li>
            <li className="App-nav-item">
              <Link to={NOTIFICATIONS.route}>{NOTIFICATIONS.name}</Link>
            </li>
            <li className="App-nav-item">
              <Link to={PROFILE.route}>{PROFILE.name}</Link>
            </li>
          </ul>
          <Routes>
            <Route path={'/'} element={LOGIN.name} />
            <Route path={LOGIN.route} element={LOGIN.name} />
            <Route path={HOME.route} element={HOME.name} />
            <Route path={NOTIFICATIONS.route} element={NOTIFICATIONS.name} />
            <Route path={PROFILE.route} element={PROFILE.name} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// {/* <header className="App-header">
//           {/* <img src={birdGrey} height="100" width="100" alt="bird" />
// <img src={birdBlue} height="100" width="100" alt="bird" />
//         <img src={birdWhite} height="100" width="100" alt="bird" />
//         <img src={birdBlueTest} height="100" width="100" alt="bird" /> */}

//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           <div>LOOOOOOOOOOOOOOOOOL</div>
//         </header> */}
