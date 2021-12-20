import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { ROUTES } from '../../../constants';

import styles from './Navbar.module.scss';

interface INavbar {
  isLogged: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<INavbar> = ({ isLogged, onLogout }) => {
  const { t } = useTranslation();
  return (
    <nav className={styles.navbar}>
      {isLogged ? (
        <ul className={styles.navbar__list}>
          <li>
            <ul>
              <li>
                <Link href={ROUTES.HOME}>
                  <a>{t('menu.home')}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <Link href={ROUTES.DASHBOARD}>
                  <a>{t('menu.dashboard')}</a>
                </Link>
              </li>
              <li>
                <a href="#" onClick={onLogout}>
                  {t('menu.logout')}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <ul className={styles.navbar__list}>
          <li>
            <ul>
              <li>
                <Link href={ROUTES.HOME}>
                  <a>{t('menu.home')}</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <Link href={ROUTES.LOGIN}>
                  <a>{t('menu.login')}</a>
                </Link>
              </li>
              <li>
                <Link href={ROUTES.REGISTER}>
                  <a>{t('menu.register')}</a>
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
