import { useState, useEffect } from 'react';
import { BsXLg } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import Styles from './sidebar.module.css';
import Navigation from '../navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <button
            type="button"
            onClick={toggleOpen}
            className={Styles.hamburgerBtn}
          >
            <FiMenu />
          </button>
          <aside className={isOpen ? Styles.sidebar : Styles.closed}>
            <BsXLg className={Styles.closeBtn} onClick={toggleOpen} />
            <h1>Logo</h1>
            <Navigation />
            {/* User Component */}
          </aside>
        </>
      ) : (
        <aside className={Styles.sidebar}>
          <h1>Logo</h1>
          <Navigation />
          {/* User Component */}
        </aside>
      )}
    </div>
  );
}
