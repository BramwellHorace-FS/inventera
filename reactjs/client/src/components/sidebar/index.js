import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Sidebar({ children }) {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <FiMenu className={styles.hamburger} onClick={toggleShow} />
      <aside
        className={`${styles.sidebar} ${
          show ? `${styles.sidebarOpen}` : `${styles.sidebar}`
        }`}
      >
        <BsXLg className={styles.close} onClick={toggleShow} />
        <Container>{children}</Container>
      </aside>
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
