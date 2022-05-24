import orangeIcon from "../../images/orangeIcon.png";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center border-b-[1px] border-lime-300/100 bg-gradient-to-r from-blue-100 to-blue-200 p-10 mb-10">
      <div className="flex-col justify-center">
        <img
          className="object-center content-center object-scale-down h-20 w-40 ..."
          src={orangeIcon}
          alt="banana"
        />
      </div>
      <div className="py-1 px-1 sm:px-1 lg:px-1">
        <div className="flex justify-between flex-wrap">
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
