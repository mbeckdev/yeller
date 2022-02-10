// import React from 'react';
import { Link } from 'react-router-dom';

type navItemType = {
  route: string;
  name: string;
};

function Navbar(props: { someNavItems: navItemType[] }) {
  return (
    <div className="navbar">
      <ul className="navbar__list-container">
        {props.someNavItems.map((navItem: navItemType) => (
          <li className="navbar__list-container__list-item" key={navItem.name}>
            <Link to={navItem.route}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
