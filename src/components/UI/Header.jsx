import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <span className="font-bold px-3 py-2  rounded-lg text-slate-900">
        <Link to="/">Home</Link>
      </span>
      <span className="font-bold  px-3 py-2  rounded-lg text-slate-900">
        <Link to="/search">Search</Link>
      </span>

      <span className="font-bold  px-3 py-2  rounded-lg text-slate-900">
        <Link to="/confirmation"> Confirmation</Link>
      </span>
    </nav>
  );
};

export default Header;
