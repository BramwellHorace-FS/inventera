import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Sidebar from '../components/sidebar';
import Logo from '../assets/images/logo-light.png';
import Navigation from '../components/navigation';
import User from '../components/user';
import styles from './styles.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar>
        <Image src={Logo} alt="logo" className="mt-3 mb-3 w-75" />
        <Navigation />
        <User
          userName="John Doe"
          userImage="https://avatars3.githubusercontent.com/u/17098477?s=460&u=e8c8f9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
        />
      </Sidebar>
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
