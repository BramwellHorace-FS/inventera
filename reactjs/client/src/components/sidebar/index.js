import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import styles from './styles.module.css';

export default function Sidebar() {
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
        <div>
          <p>Hey</p>
        </div>
      </aside>
    </div>
  );
}
