import orangeIcon from "../../images/orangeIcon.png";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="flex justify-center border-b-[1px] border-lime-300/100 bg-gradient-to-r from-blue-100 to-blue-200 p-10 mb-10">
      <img
        className="object-center object-scale-down h-20 w-40 ..."
        src={orangeIcon}
      />
      <div className="py-1 px-1 sm:px-1 lg:px-1">
        <div className="flex justify-between flex-wrap">
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"></div>
        </div>
      </div>
      <Header/>
    </div>
  );
};

export default Banner;
