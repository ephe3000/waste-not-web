import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <main className="bg-white max-w-lg mx-auto  md:p-10 my-5 rounded-lg shadow-2xl">
        <h1 className="text-3xl m-5 font-bold text-center text-gray-700 underline decoration-2 decoration-lime-400">
          Confirmation
        </h1>
        <br />
        <p>
          Email confirmation, with item, drop off and/or collection details, has
          been sent. We look forward to meeting you. <br />
          <br />
          Thank you for visiting our site.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
