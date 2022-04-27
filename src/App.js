import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Landing page for waste.not.com</h1>
      <div>maybe write a mission and values statement</div>
      <br></br>
      <div> \../ maybe have a image \../ </div>
      <br></br>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> | 
        <Link to="/locations"> Locations</Link> | 
        <Link to="/food"> Food</Link>
      </nav>
    </div>
  );
}
