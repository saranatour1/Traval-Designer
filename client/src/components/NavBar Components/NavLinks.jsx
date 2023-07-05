import { NavLink ,useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavLinks({ activeStyle , inActiveStyle }) {
const location =useLocation();

  return (
    // @ts-ignore
    <>
      <
// @ts-ignore
      NavLink
        // @ts-ignore
        exact
        to="/dashboard"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? activeStyle : inActiveStyle
      }
      >
        Dashboard
      </NavLink>
      <
// @ts-ignore
      NavLink
        to="/team"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? activeStyle : inActiveStyle
      }
      >
        Team
      </NavLink>

    </>
  );
}

export default NavLinks;
