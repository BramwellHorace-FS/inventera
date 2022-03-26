import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { getUsers } from '../redux/features/users/usersSlice';
import Sidebar from '../components/sidebar';
import Logo from '../assets/images/logo-light.png';
import Navigation from '../components/navigation';
import User from '../components/user';
import styles from './styles.module.css';

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  const onLogout = () => {
    dispatch({ type: 'users/logout' });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.layout}>
      <Sidebar>
        <Image src={Logo} alt="logo" className="mt-3 mb-3 w-75" />
        <Navigation />
        {status === 'loading' && <div>Loading...</div>}
        {status === 'error' && <div>Error!</div>}
        {status === 'success' && (
          <User
            userName={users.userName}
            avatar={users.avatar}
            onLogout={onLogout}
          />
        )}
      </Sidebar>
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
