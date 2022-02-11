import React from 'react';
import { Link } from 'react-router-dom';

import routeConstants from 'shared/constants';

type navItemType = {
  name: string;
  route: string;
};

// --- same as the following ---
// const {
//   LOGIN,
//   HOME,
//   NOTIFICATIONS,
//   PROFILE,
// }: {
//   LOGIN: navItemType;
//   HOME: navItemType;
//   NOTIFICATIONS: navItemType;
//   PROFILE: navItemType;
// } = routeConstants;
// const navItems: navItemType[] = [LOGIN, HOME, NOTIFICATIONS, PROFILE];
const navItems: navItemType[] = Object.values(routeConstants);

const Navbar: React.FC = () => {
  return (
    <ul className="App-nav-list">
      {navItems.map((navItem: navItemType, i: number) => (
        <li key={i} className="App-nav-item">
          <Link to={navItem.route}>{navItem.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

// Note to self:
// not-destructured:
// const LOGIN: navItemType = routeConstants.LOGIN;
// const HOME: navItemType = routeConstants.HOME;
// const NOTIFICATIONS: navItemType = routeConstants.NOTIFICATIONS;
// const PROFILE: navItemType = routeConstants.PROFILE;

// // This doesn't work!!!
// const {
//   LOGIN: navItemType,
//   HOME: navItemType,
//   NOTIFICATIONS: navItemType,
//   PROFILE: navItemType,
// } = routeConstants;
//
// Other note to self:
// don't write notes like this in comments
