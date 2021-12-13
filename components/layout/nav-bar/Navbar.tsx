import Link from 'next/link';

import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '../../../constants';

import styles from './Navbar.module.scss';

interface INavbar {
  isLogged: boolean;
}

const Navbar: React.FC<INavbar> = ({ isLogged }) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      {isLogged ? (
        <ul className={styles.navbar__list}>
          <li>
            <ul>
              <li>
                <Link href={CONSTANTS.PAGES.HOME.SLUG}>
                  <a>{t(`pages.${CONSTANTS.PAGES.HOME.NAME}`)}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <Link href={CONSTANTS.PAGES.DASHBOARD.SLUG}>
                  <a>{t(`pages.${CONSTANTS.PAGES.DASHBOARD.NAME}`)}</a>
                </Link>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <ul className={styles.navbar__list}>
          <li>
            <ul>
              <li>
                <Link href={CONSTANTS.PAGES.HOME.SLUG}>
                  <a>{t(`pages.${CONSTANTS.PAGES.HOME.NAME}`)}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <Link href={CONSTANTS.PAGES.LOGIN.SLUG}>
                  <a>{t(`pages.${CONSTANTS.PAGES.LOGIN.NAME}`)}</a>
                </Link>
              </li>
              <li>
                <Link href={CONSTANTS.PAGES.REGISTER.SLUG}>
                  <a>{t(`pages.${CONSTANTS.PAGES.REGISTER.NAME}`)}</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
