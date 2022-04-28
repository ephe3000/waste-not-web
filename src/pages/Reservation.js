import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <>
      <h1>reservation</h1>
      <p>
        this is where you enter your email address and phone number and get a
        resveration no:
      </p>

      <Link to="/">go home</Link>
    </>
  );
};

export default Reservation;
