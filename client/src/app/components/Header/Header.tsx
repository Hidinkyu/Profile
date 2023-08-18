import style from './style.module.scss';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';

interface HeaderProps {
  Logo: StaticImageData;
}

const Header: NextPage<HeaderProps> = ({ Logo }) => {
  return (
    <div className={style.header}>
      <Image src={Logo} alt='Logo' />
      <span className={style.navBar}>
        <ul>
          <li>about</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </span>
    </div>
  );
};

export default Header;
