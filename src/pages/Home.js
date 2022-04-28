import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>homepage</h1>
      <Link to="/search">Search</Link> |<Link to="/location"> Location </Link>|
      <Link to="/reservation"> Reservation</Link>
      <p>this is where you introduce the site, what it does, how it works.</p> 
    </>
  );
};

export default Home;
