import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { getUsers } from '../redux/features/users/usersSlice';
import Sidebar from '../components/sidebar';
import SiteModal from '../components/modal';
import useValidate from '../hooks';
import Contact from '../components/forms/contact';
import HelpButton from '../components/buttons/help';
import Logo from '../assets/images/logo-light.png';
import Navigation from '../components/navigation';
import User from '../components/user';
import styles from './styles.module.css';

export default function Layout({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { validated, handleSubmit } = useValidate();

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
        <Link to="/">
          <Image
            src={Logo}
            alt="Inventera light logo"
            className="mt-3 mb-3 w-75"
          />
        </Link>
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
      <main>
        {children}
        <HelpButton onClick={handleShow}>Help & Support</HelpButton>

        <SiteModal
          show={show}
          handleClose={handleClose}
          modalTitle="Contact Us"
        >
          <Contact
            handleClose={handleClose}
            validated={validated}
            handleSubmit={handleSubmit}
          />
        </SiteModal>
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
