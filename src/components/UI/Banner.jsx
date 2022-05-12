import orangeIcon from "../../images/orangeIcon.png";

const Banner = () => {
  return (
    <div class="flex justify-center border-t-[1px] bg-gradient-to-r from-blue-200 to-blue-300 p-10 mb-10">
      <img
        class="object-center object-scale-down h-20 w-40 ..."
        src={orangeIcon}
      />
      <div class="py-1 px-1 sm:px-1 lg:px-1">
        <div class="flex justify-between flex-wrap">
          <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
