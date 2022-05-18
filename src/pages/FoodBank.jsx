// ----------- imports ----------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/UI/Modal";
import Header from "../components/UI/Header";
// import foodBankMock from "../mock/foodbank.json";
import CollectionForm from "../components/CollectionForm";
import DropOffForm from "../components/DropOffForm";
import Banner from "../components/UI/Banner";
import Footer from "../components/UI/Footer";

// --------- FUNCTIONS --------------
const FoodBank = () => {
  // name and address display, plus items in each bank
  const [foodBank, setFoodBank] = useState(null);

  //empty array for foodbank packs
  const [foodPacks, setFoodPacks] = useState([]);

  //nullable string with link to drop and collection modals
  const [modalActive, setModalActive] = useState(null);

  //nullable string with link to drop and collection modals
  const [selectedItem, setSelectedItem] = useState(null);

  // link param to city name
  const params = useParams();

  // drop off modal

  // **-------  drop off inputtd items -> pending backend api -----------**
  const [dropOffItems, setDropOffItems] = useState(null);

  // I am using useEffect being the component will send a fetch request as a side-effect
  useEffect(() => {
    console.log(params.id);
    if (!params.id) {
      return;
    }
    // fetch to get a location in locations
    fetch(`${process.env.REACT_APP_API}locations/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        setFoodBank(result);

        // another fetch to get the items
        fetch(`${process.env.REACT_APP_API}locations/${params.id}/food_packs`)
          .then((response) => response.json())
          .then((result) => setFoodPacks(result));
      })
      .catch((error) => console.log("error", error));
  }, [params.id]);

  // ----------- HANDLERS --------------------

  // setting the item from the click button
  const handleItemClick = (item) => {
    setModalActive("collect");
    setSelectedItem(item);
  };

  // if foodbank not yet e.g., no id/invalid id
  if (!foodBank) {
    return null;
  }

  // ------------- RENDER -----------------

  return (
    <>
      <Banner />
      <Header />
      <h1 className="text-3xl text-center pt-1 font-bold text-gray-700 m-5 underline decoration-2 decoration-lime-400">
        {foodBank.name}
        {console.log("jhjkh", foodBank)}
      </h1>

      {/* ----------------- items to collect form ------------- */}

      <section className="bg-white max-w-lg mx-auto align-middle md:p-10 m-20 rounded-lg shadow-2xl">
        <div className="p-3 rounded bg-grey-100">
          <span className="text-gray-700 pt-2 p-2 text-lg text-center">
            <h2 className="font-bold">Are you in need of food?</h2>
          </span>
          {foodPacks.map((foodPack) => (
            <div className="flex justify-between m-5 items-center">
              <p className="text-gray-700 pt-2 p-2 text-center font-semibold">
                {foodPack.description}
              </p>

              <button
                onClick={() => handleItemClick(foodPack)}
                className="font-bold py-2 px-4 m-5 rounded text-white bg-lime-400 hover:bg-lime-600"
              >
                click
              </button>
            </div>
          ))}
        </div>
      </section>

      <Modal
        active={modalActive === "collect"}
        handleClose={() => setModalActive(false)}
      >
        <CollectionForm item={selectedItem} />
      </Modal>

      <Modal
        active={modalActive === "drop"}
        handleClose={() => setModalActive(false)}
      >
        <DropOffForm />
      </Modal>

      {/* --------- drop off form ---------- */}

      <section className="flex flex-row">
        <section className="bg-white max-w-lg mx-auto  md:p-5 my-5 rounded-lg shadow-2xl">
          <div className="p-3 rounded bg-grey-100">
            <span className="text-gray-700 pt-2 p-2 text-lg text-center">
              <h2 className="font-bold">Do you have spare food?</h2>
            </span>

            <button
              onClick={() => setModalActive("drop")}
              className="group block w-full text-center py-2 px-4 text-lg font-bold rounded-md text-white bg-lime-400 hover:bg-lime-600"
            >
              click
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default FoodBank;

// doc. for params - https://reactrouter.com/docs/en/v6/faq
