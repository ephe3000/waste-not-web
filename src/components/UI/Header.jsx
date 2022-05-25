import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header flex justify-center space-x-4 text-slate-900 font-bold">
      <span className="px-3 py-2 rounded-lg">
        <Link to="/">Home</Link>
      </span>
      <span className="px-3 py-2 rounded-lg">
        <Link to="/search">Search</Link>
      </span>
      <span className="px-3 py-2 rounded-lg">
        <Link to="/confirmation"> Confirmation</Link>
      </span>
    </nav>
  );
};

export default Header;
