import Link from 'next/link';

import { useTranslation } from 'react-i18next';

import { CONSTANTS } from '../../../constants';

interface INavbar {
  isLogged: boolean;
}

const Navbar: React.FC<INavbar> = ({ isLogged }) => {
  const { t } = useTranslation();
  return (
    <nav>
      {isLogged ? (
        <ul>
          <li>
            <Link href={CONSTANTS.PAGES.HOME.SLUG}>
              <a>{t(CONSTANTS.PAGES.HOME.NAME)}</a>
            </Link>
          </li>
          <li>
            <Link href={CONSTANTS.PAGES.DASHBOARD.SLUG}>
              <a>{t(CONSTANTS.PAGES.DASHBOARD.NAME)}</a>
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link href={CONSTANTS.PAGES.HOME.SLUG}>
              <a>{t(CONSTANTS.PAGES.HOME.NAME)}</a>
            </Link>
          </li>
          <li>
            <Link href={CONSTANTS.PAGES.LOGIN.SLUG}>
              <a>{t(CONSTANTS.PAGES.LOGIN.NAME)}</a>
            </Link>
          </li>
          <li>
            <Link href={CONSTANTS.PAGES.REGISTER.SLUG}>
              <a>{t(CONSTANTS.PAGES.REGISTER.NAME)}</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
