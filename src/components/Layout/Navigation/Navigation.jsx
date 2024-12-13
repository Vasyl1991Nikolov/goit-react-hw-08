import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
