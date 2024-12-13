import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { selectUser } from '../../../redux/auth/selectors';
import s from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <p>{`Welcome`}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;