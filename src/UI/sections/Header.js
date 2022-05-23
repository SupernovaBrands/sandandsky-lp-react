import { ReactComponent as Logo } from '../../assets/ss-logo.svg';

const Header = () => {
  return (
    <header className="container text-center">
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand mx-auto text-secondary' href='https://www.sandandsky.com'>
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
