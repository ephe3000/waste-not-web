import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-center space-x-4">
      <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <Link to="/">Home</Link>
      </span>
      <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <Link to="/search">Search</Link>
      </span>

      <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <Link to="/confirmation"> Confirmation</Link>
      </span>
    </nav>
  );
};

export default Header;
