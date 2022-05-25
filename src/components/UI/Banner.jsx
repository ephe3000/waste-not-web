import logo from "../../images/logo.png";
import Header from "./Header";

const Banner = () => {
  return (
    <div
      className="flex flex-col items-center border-b-[1px] border-lime-300/100 bg-gradient-to-r p-5 mb-20"
      style={{ backgroundColor: "rgb(252, 249, 250)", opacity: 0.8 }}
    >
      <img style={{ height: "80px" }} src={logo} />
      <Header />
    </div>
  );
};

export default Banner;