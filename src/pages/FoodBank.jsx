// ----------- imports ----------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/UI/Modal";
import Header from "../components/Header";
import foodBankMock from "../mock/foodbank.json";
import CollectionForm from "../components/CollectionForm";
import DropOffForm from "../components/DropOffForm";

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
      <Header />
      <h1 className="text-3xl font-bold underline">
        your foodbank id: {params.id}
      </h1>
      <div>
        {foodBank.name} {foodBank.description}
      </div>

      {/* --------- drop off form ---------- */}

      <div class="w-full max-w-lg p-10 bg-blue-100 m-10">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Spare food?
        </span>

        <button
          onClick={() => setModalActive("drop")}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          click
        </button>
      </div>

      {/* ----------------- items to collect form ------------- */}

      <div class="w-full max-w-lg p-10 bg-blue-100 m-10">
        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Items available
        </span>
        {foodBank.items.map((item) => (
          <div class="flex justify-between m-5">
            <p>{item.name}</p>

            <button
              onClick={() => handleItemClick(item)}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              click
            </button>
          </div>
        ))}
      </div>

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
    </>
  );
};

export default FoodBank;

// doc. for params - https://reactrouter.com/docs/en/v6/faq
