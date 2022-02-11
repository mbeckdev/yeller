import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routeConstants from 'shared/constants/routes';
// import RouteWithSubRoutes from 'shared/components';

import './App.css';
import routes from 'shared/constants/';
// import routes from '../route' ----------------;
import Navbar from './Navbar';

import birdBlue from 'assets/yellerBirdBlueMinified.svg';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const { LOGIN, HOME, NOTIFICATIONS, PROFILE } = routeConstants;
// // type navItemType = { name: String; route: String };

// let navItems = [LOGIN, HOME, NOTIFICATIONS, PROFILE];

// import birdGrey from '../../assets/yellerBirdGreyMinified.svg';
// import birdWhite from '../../assets/yellerBirdWhiteMinified.svg';
// import birdBlue from '../../assets/yellerBirdBlueMinified.svg';
// import birdBlueTest from '../../assets/yellerBirdBlueTest.svg';

const App: React.FC = () => {
  console.log('routes', routes);
  return (
    <Router>
      <div className="App">
        <div className="App">
          {/* <h1>App Component</h1> */}

          {/* <img src={birdBlue} height="100" width="100" alt="bird" /> */}
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path={LOGIN.route} element={<Login />} />
            <Route path={HOME.route} element={<Home />} />
            <Route path={NOTIFICATIONS.route} element={<Notifications />} />
            <Route path={PROFILE.route} element={<Profile />} /> */
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

// {routes.map((route, i) => (
//   <RouteWithSubRoutes key={i} {...route} />
// ))}

// {
//   /* <Route path={'/'} element={LOGIN.name} />
// <Route path={LOGIN.route} element={<Login />} />
// <Route path={HOME.route} element={<Home />} />
// <Route path={NOTIFICATIONS.route} element={<Notifications />} />
// <Route path={PROFILE.route} element={<Profile />} /> */
// }

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="App">
//           <h1>App Component</h1>

//           <img src={birdBlue} height="100" width="100" alt="bird" />
//           <Navbar someNavItems={navItems} />

//           <Routes>
//             <Route path={'/'} element={LOGIN.name} />
//             <Route path={LOGIN.route} element={<Login />} />
//             <Route path={HOME.route} element={<Home />} />
//             <Route path={NOTIFICATIONS.route} element={<Notifications />} />
//             <Route path={PROFILE.route} element={<Profile />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// .....

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
