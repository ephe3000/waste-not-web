import { Link, useParams } from "react-router-dom";

const Location = () => {
  const params = useParams();

  return (
    <>
      <h1>location {params.id}</h1>
      <p>
        The specific location that you have chosen. And the food that's
        available there
      </p>
      <Link to="/">go home</Link>
    </>
  );
};

export default Location;

// doc. for params - https://reactrouter.com/docs/en/v6/faq
