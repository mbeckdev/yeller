import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import routeConstants from 'shared/constants/routes';
import birdBlue from 'assets/yellerBirdBlueMinified.svg';

import Navbar from './Navbar';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const { LOGIN, HOME, NOTIFICATIONS, PROFILE } = routeConstants;
// type navItemType = { name: String; route: String };

let navItems = [LOGIN, HOME, NOTIFICATIONS, PROFILE];

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
          <Navbar someNavItems={navItems} />

          <Routes>
            <Route path={'/'} element={LOGIN.name} />
            <Route path={LOGIN.route} element={<Login />} />
            <Route path={HOME.route} element={<Home />} />
            <Route path={NOTIFICATIONS.route} element={<Notifications />} />
            <Route path={PROFILE.route} element={<Profile />} />
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
