import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

    </header>
  );
};

export default Header;