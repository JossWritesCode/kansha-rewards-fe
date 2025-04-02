import logo from '@/assets/logo.svg';
function Header() {
  return (
    <header className="flex h-[80px] items-center justify-between bg-[var(--primary-blue)] pl-2 pr-4">
      <a href="/" className="flex items-center justify-between">
        <img src={logo} alt="Kansha logo" className="pt-2" />
        <span className="text-lg font-normal text-[var(--white)] hover:underline">Kansha</span>
      </a>
      <button className="text-white">Login</button>
    </header>
  );
}

export default Header;
