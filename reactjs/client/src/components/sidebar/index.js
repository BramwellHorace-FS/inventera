import { useState, useEffect } from 'react';
import Styles from './sidebar.module.css';

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
          <button type="button" onClick={toggleOpen}>
            {/* Hamburger menu */}
          </button>
          <aside className={isOpen ? Styles.sidebar : Styles.closed}>
            {/* Close button */}
            {/* Logo here */}
            {/* Navigation */}
            {/* User Component */}
          </aside>
        </>
      ) : (
        <aside className={Styles.sidebar}>
          {/* Logo here */}
          {/* Navigation */}
          {/* User Component */}
        </aside>
      )}
    </div>
  );
}
