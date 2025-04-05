import Logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header role="banner" className="w-full bg-brand-primary">
      {/* smaller left padding to visually align logo despite shadow */}
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-4 pl-2 pr-5 md:pl-0">
        <Link to="/">
          {/* top padding on logo to compensate for logo shadow */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Kansha logo" className="pt-2" />
            <span className="text-3xl font-normal text-brand-white hover:underline">Kansha</span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-2xl font-medium text-brand-white hover:underline">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
