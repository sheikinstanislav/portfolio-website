import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import styles from './Header.module.css';

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<null | string>(null);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-schema: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${styles.header_wrapper} dark:bg-transparent`}>
      <div className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img className={styles.logo_img} src={Logo} alt="logo" />
          <div className={styles.logo_text}>Stanislav Sheikin 🖕</div>
        </Link>

        <nav className={styles.header_nav}>
          <ul className={styles.header_menu}>
            <li className={styles.header_link_item}>
              <Link className={styles.header_link} to="/works">
                Works
              </Link>
            </li>
            <li className={styles.header_link_item}>
              <Link className={styles.header_link} to="/works">
                Contact
              </Link>
            </li>
            <li className={styles.header_link_item}>
              <AiFillGithub className="mr-2" />
              <Link className={styles.header_link} to="/works">
                Source
              </Link>
            </li>
          </ul>
          <motion.div
            key={theme}
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className={
                theme === 'dark' ? styles.modeButton : styles.modeButtonDark
              }
              onClick={handleThemeSwitcher}
              type="button"
            >
              {theme === 'dark' ? (
                <BsMoonStars className="text-2xl" />
              ) : (
                <BsSun className="text-2xl text-white" />
              )}
            </button>
          </motion.div>

          <div className={styles.mobile_nav}>
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="space-y-2 flex flex-col justify-center ml-4 items-center bg-orange-300 rounded-md p-1 w-12 h-12 duration-300 ease-in-out hover:bg-orange-500  !important"
            >
              <span className="block h-0.5 w-8 bg-gray-600" />
              <span className="block h-0.5 w-8 bg-gray-600" />
              <span className="block h-0.5 w-8 bg-gray-600" />
            </button>
            <motion.div
              animate={isNavOpen ? 'open' : 'closed'}
              variants={variants}
            >
              <ul
                onClick={() => setIsNavOpen(false)}
                className={isNavOpen ? styles.mobile_menu : 'hidden'}
                aria-hidden="true"
              >
                <li className={styles.mobile_link}>
                  <Link to="/">About</Link>
                </li>
                <li className={styles.mobile_link}>
                  <Link to="/works">Works</Link>
                </li>
                <li className={styles.mobile_link}>
                  <Link to="/">Contact</Link>
                </li>
                <li className={styles.mobile_link}>
                  <Link to="/">View Source</Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </nav>
      </div>
    </div>
  );
};
