import { NavLink ,useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function NavLinks({ activeStyle , inActiveStyle }) {
const location =useLocation();
  console.log(location.pathname);
  return (
    // @ts-ignore
    <>
      <
// @ts-ignore
      NavLink
        // @ts-ignore
        exact
        to="/main"
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
      <
// @ts-ignore
      NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? activeStyle : inActiveStyle
      }
      >
        Projects
      </NavLink>
      <
// @ts-ignore
      NavLink
        to="/calendar"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? activeStyle : inActiveStyle
      }
      >
        Calendar
      </NavLink>
    </>
  );
}

export default NavLinks;
