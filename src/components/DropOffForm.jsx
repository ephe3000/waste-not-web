// ----- imports ------
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validate from "./validate";

// ----- functions --------
const DropOffForm = () => {
  const [foodItem, setFoodItem] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errors, setErrors] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  // ------- handlers --------
  // takes a form submission event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const formErrors = validate(email, telephone);

    if (formErrors.email || formErrors.telephone) {
      return setErrors(formErrors);
    } else {
      const urlencoded = new URLSearchParams();
      urlencoded.append("locations_id", params.id);
      urlencoded.append("description", foodItem);

      fetch(`${process.env.REACT_APP_API}foodpack`, {
        method: "POST",
        body: urlencoded,
      })
        .then((response) => navigate("../confirmation"))
        .catch((error) => console.log("error", error));
    }
  };

  // -------- render ---------

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
        <h1 className="text-3xl font-bold text-gray-700">
          Register your donation
        </h1>{" "}
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="food-item" className="sr-only">
              Food Item
            </label>
            <input
              onChange={(e) => setFoodItem(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-200 text-gray-900 rounded-b-md focus:outline-none focus:ring-lime-400 focus:border-lime-400 focus:z-10 sm:text-sm"
              placeholder="Food item"
            />
          </div>

          <br />

          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-200 text-gray-900 rounded-t-md focus:outline-none focus:ring-lime-400 focus:border-lime-400 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          {errors && (
            <div className="text-base text-red-700">{errors.email}</div>
          )}
          <br />

          <br />

          <div>
            <label htmlFor="telephone" className="sr-only">
              Telephone
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-200 text-gray-900 rounded-t-md focus:outline-none focus:ring-lime-400 focus:border-lime-400 focus:z-10 sm:text-sm"
              placeholder="Telephone"
            />
          </div>
          {errors && (
            <div className="text-base text-red-700">{errors.telephone}</div>
          )}
        </div>
        <div className="flex items-center justify-between"></div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default DropOffForm;
