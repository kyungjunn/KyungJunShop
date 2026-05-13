import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>React Shop</h1>

      <nav>
        <Link to="/">홈</Link>
        <Link to="/cart">장바구니</Link>
      </nav>
    </header>
  );
};

export default Header;