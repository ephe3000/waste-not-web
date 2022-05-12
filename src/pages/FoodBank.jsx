// ----------- imports ----------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/UI/Modal";
import Header from "../components/UI/Header";
import foodBankMock from "../mock/foodbank.json";
import CollectionForm from "../components/CollectionForm";
import DropOffForm from "../components/DropOffForm";
import Banner from "../components/UI/Banner";
import Footer from "../components/UI/Footer";

// --------- FUNCTIONS --------------
const FoodBank = () => {
  // name and address display, plus items in each bank
  const [foodBank, setFoodBank] = useState(null);

  //nullable string with link to drop and collection modals
  const [modalActive, setModalActive] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  // link param to city name
  const params = useParams();

  // drop off modal

  // **-------  drop off inputtd items -> pending backend api -----------**
  const [dropOffItems, setDropOffItems] = useState(null);

  //  this should get foodbank from api, but using mock data atm
  // I am using useEffect being the component will send a fetch request as a side-effect
  useEffect(() => {
    setFoodBank(foodBankMock);
  }, []);

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
      <h1 className="text-3xl font-bold underline text-center p-20">
        {foodBank.name}
        {console.log("jhjkh", foodBank)}
      </h1>

      {/* --------- drop off form ---------- */}

      <section className="bg-white max-w-lg mx-auto  md:p-5 my-5 rounded-lg shadow-2xl">
        <div class="p-3 rounded bg-grey-100">
          <span class="text-gray-700 pt-2 p-2 text-lg text-center">
            <h2 class="font-bold">Do you have spare food?</h2>
          </span>

          <button
            onClick={() => setModalActive("drop")}
            class="group block w-full text-center py-2 px-4 text-lg font-bold rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            click
          </button>
        </div>
      </section>

      {/* ----------------- items to collect form ------------- */}

      <section className="bg-white max-w-lg mx-auto align-middle md:p-5 my-5 rounded-lg shadow-2xl">
        <div class="p-3 rounded bg-grey-100">
          <span class="text-gray-700 pt-2 p-2 text-lg text-center">
            <h2 class="font-bold">Are you in need of food?</h2>
          </span>
          {foodBank.items.map((item) => (
            <div class="flex justify-between m-5 items-center">
              <p class="text-gray-700 pt-2 p-2 text-center font-semibold">
                {item.name}
              </p>

              <button
                onClick={() => handleItemClick(item)}
                class="font-bold py-2 px-4 m-5 rounded text-white bg-green-600 hover:bg-green-700"
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
      <Footer />
    </>
  );
};

export default FoodBank;

// doc. for params - https://reactrouter.com/docs/en/v6/faq
