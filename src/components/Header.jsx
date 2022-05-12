import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="flex justify-center space-x-4">
      <a
        href="/reports"
        class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        <Link to="/">Home</Link>
      </a>
      <a
        href="/dashboard"
        class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        <Link to="/search">Search</Link>
      </a>
      <a
        href="/projects"
        class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        <Link to="/location">Location</Link>
      </a>
      <a
        href="/reports"
        class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        <Link to="/confirmation"> Confirmation</Link>
      </a>
    </nav>
  );
};

export default Header;
