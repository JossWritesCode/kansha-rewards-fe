import logo from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header
      role="banner"
      className="flex h-[80px] items-center justify-between bg-[var(--primary-blue)] px-4 lg:px-12"
    >
      <Link to="/" className="flex items-center">
        {/*top padding is necessary on logo because it has shadow around it which makes it look misaligned */}
        <img src={logo} alt="Kansha logo" className="pt-2" />
        <span className="text-2xl font-normal text-[var(--white)] hover:underline">Kansha</span>
      </Link>
      <div className="flex items-center gap-2">
        <button type="button" className="font-normal text-[var(--white)]">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
