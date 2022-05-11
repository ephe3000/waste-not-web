import Header from "../components/Header";
import { useNavigate, useParams, Link } from "react-router-dom";

// ----- FUNCTIONS --------
const Home = () => {
  const params = useParams();
  const navigate = useNavigate();

  // ------- HANDLERS --------
  const handleStart = (e) => {
    console.log(params.id);
    navigate("../search");
  };

  // -------- RENDER ---------
  return (
    <>
      {/* <Header /> */}
      <body class="font-medium rounded-md text-white">
        <main className="bg-white max-w-lg mx-auto p-1 md:p-5 my-5 rounded-lg shadow-2xl">
          <section>
            <h2 className="font-bold text-2xl pt-1">Welcome to Waste-Not!</h2>
            <h1 className="text-3xl text-center font-bold text-gray-700 m-5">
              Welcome to Waste-Not!
            </h1>
          </section>

          <section class="mt-10">
            <div class="mb-6 pt-3 rounded bg-gray-200">
              <p className="text-gray-700 pt-2 p-10 text-lg text-center">
                Waste-Not is a site for people with spare food.
                <br />
                It is also a site for people in food poverty. styline needs
                sorting here!{" "}
              </p>
              <p className="text-gray-700 pt-2 p-10 text-base text-center">
                We've put this site together to connect you to local food banks,
                and to help reduce food waste. <br />
                We're hoping that you enjoy using our site, we've tried to make
                it as user friendly as possible.
              </p>
            </div>
          </section>

          <br />

          <Link
            to="../search"
            className="group block w-full text-center py-2 px-4 text-sm font-medium rounded-md text-white bg-blue-200 hover:bg-blue-400"
          >
            Start
          </Link>
        </main>
      </body>
    </>
  );
};

export default Home;
