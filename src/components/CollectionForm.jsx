// ----- imports ------
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// ----- FUNCTIONS --------
const CollectionForm = (props) => {
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  // ------- HANDLERS --------
  // takes a form submission event
  //   props item is defined in foodbank
  // useparams are defined in search
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(email);
    console.log(telephone);
    console.log(props.item.id);
    console.log(params.id);
    navigate("../confirmation");
  };

  // -------- RENDER ---------

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
        <h1 className="text-3xl font-bold underline">You are collecting: </h1>{" "}
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <h2 className="text-2xl font-bold">{props.item.name}</h2>
          <br />
          <div className="pt-10">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <br />
          <div>
            <label htmlFor="telephone" className="sr-only">
              Telephone
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Telephone"
            />
          </div>
        </div>
        <div className="flex items-center justify-between"></div>
        <div>
          <div className="pb-10">*Items will be held for 2 days</div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CollectionForm;
