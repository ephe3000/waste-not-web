import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          <Link to="/reservation"> Reservation</Link>
        </a>
      </nav>

      <br />
      <br />
      <h1 className="text-3xl align-center font-bold underline">Homepage</h1>
      <br />
      <p>
        This is where you introduce the site, what it does, how it works. Maybe
        some other bits and pieces. Data. Cookies. Privacy policy, etc.
      </p>
      <br />

      <br />

      <div>
        <div class="flex items-center space-x-2 text-base">
          <h4 class="font-semibold text-slate-900">Contributors</h4>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            3
          </span>
        </div>

        <div class="mt-3 flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-blue"
            // src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-blue"
            // src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            class="inline-block h-12 w-12 rounded-full ring-2 ring-blue"
            // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="mt-3 text-sm font-medium">
          <a href="#" class="text-blue-500"></a>
        </div>
      </div>
    </>
  );
};

export default Home;
