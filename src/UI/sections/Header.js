import { ReactComponent as Logo } from '../../assets/ss-logo.svg';

const Header = (props) => {
  return (
    <header className="container-fluid text-center">
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand mx-auto text-secondary' href={props.externalUrl ? props.externalUrl : 'https://www.sandandsky.com'}>
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
