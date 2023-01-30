import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdOutlineSearch, MdNotificationsNone } from 'react-icons/md';

import styles from './styles.module.scss';
import netflixLogo from '../../assets/images/netflix-logo.svg';
import netflixAvatar from '../../assets/images/netflix-avatar.jpg';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setNavBackground(window.scrollY > 0)
    );

    return () => {
      window.removeEventListener('scroll', () => setNavBackground(false));
    };
  }, [navBackground]);

  return (
    <header
      className={`${styles['navbar-container']} ${
        navBackground && styles['navbar-container-bg']
      }`}
    >
      <nav className={styles['navbar-nav']}>
        <div className={styles['primary-navigation']}>
          <Link to="/">
            <img
              className={styles['primary-navigation-logo']}
              src={netflixLogo}
              alt="Netflix"
            />
          </Link>

          <ul className={styles['primary-navigation-list']}>
            <li className={styles['active']}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
          </ul>
        </div>

        <div className={styles['secondary-navigation']}>
          <div className={styles['secondary-navigation-icons']}>
            <MdOutlineSearch size={24} fill={'#E5E5E5'} />
            <MdNotificationsNone size={24} fill={'#E5E5E5'} />
          </div>
          <img
            className={styles['secondary-navigation-avatar']}
            src={netflixAvatar}
            alt="Netflix avatar"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
