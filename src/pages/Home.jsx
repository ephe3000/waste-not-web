import Banner from "../components/UI/Banner";
import Footer from "../components/UI/Footer";
import { Link } from "react-router-dom";

// ----- FUNCTIONS --------
const Home = () => {
  // ------- HANDLERS --------

  // -------- RENDER ---------
  return (
    <>
      <Banner />
      <main className="bg-white max-w-lg mx-auto  md:p-5 my-5 rounded-lg shadow-2xl">
        <section>
          <h1 className="text-2xl text-center pt-1 font-bold text-gray-700 m-5">
            Welcome to Waste-Not!
          </h1>
        </section>

        <section class="m-50">
          <div class="pt-3 rounded bg-grey-100">
            <p className="text-gray-700 pt-2 p-2 text-lg text-center">
              Waste-Not is a site for people with spare food. It is also a site
              for people in food poverty.
            </p>
            <p className="text-gray-700 pt-2 p-2 m-10 text-lg text-center">
              Waste-Not connects you to local food banks. Get involved by
              clicking the button below. <br />
            </p>
          </div>
        </section>

        <br />

        <Link
          to="../search"
          className="group block w-full text-center py-2 px-4 text-lg font-bold rounded-md text-white bg-green-500 hover:bg-green-700"
        >
          Start
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Home;
