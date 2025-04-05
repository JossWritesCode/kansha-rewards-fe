import Logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full bg-brand-primary py-10 pr-5 text-brand-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Logo + Copyright */}
        <div className="flex flex-col items-center gap-2 md:ml-2 md:items-start">
          <Link to="/" className="flex items-center gap-2 hover:underline">
            <img src={Logo} alt="Kansha logo" className="pt-2" />
            <span className="text-3xl font-normal text-brand-white">Kansha</span>
          </Link>
          <div className="mt-2 text-center text-sm font-medium md:ml-3 md:mt-0 md:text-left">
            © Kansha. {new Date().getFullYear()}. We love our users!
          </div>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-col items-center gap-4 text-2xl md:flex-row md:items-start md:gap-10">
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
