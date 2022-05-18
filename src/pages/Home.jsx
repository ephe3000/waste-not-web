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
      <main className="flex flex-col bg-white max-w-lg mx-auto justify-center items-center  md:p-5 my-5 mt-20 rounded-lg shadow-2xl">
        <section>
          <h1 className="text-3xl text-center pt-1 font-bold text-gray-700 m-5 underline decoration-2 decoration-lime-400">
            Welcome to Waste-Not
          </h1>
        </section>

      
      <div>
        <section className="m-50">
          <div className="pt-3 rounded bg-grey-100">
            <p className="text-gray-700 pt-2 p-2 text-lg text-center">
              Waste-Not is a site for sharing food. Whether you have food to spare or are looking for food in your local area, Waste Not can help you. 
            </p>
            <p className="text-gray-700 pt-2 p-2 m-10 text-lg text-center">
              Waste-Not connects you to local food banks. Get involved by
              clicking the button below. <br />
            </p>
          </div>
        </section>
      </div>
        <Link
          to="../search"
          className="text-center justify-center py-2 px-4 text-lg font-bold rounded-md text-white bg-lime-400 hover:bg-lime-500"
        >
          Start
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Home;
