import Banner from "../components/UI/Banner";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <main className="bg-white max-w-lg mx-auto  md:p-10 my-5 rounded-lg shadow-2xl">
        <h1 className="text-3xl align-center font-bold underline">
          Confirmation
        </h1>
        <br />
        <p>
          Email confirmation, with item and location details, has been sent. We
          look forward to meeting you. <br />
          <br />
          Thank you visiting our site.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
