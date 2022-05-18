const Footer = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  return (
    <div class="footer">
        <div class="footer-content">

          <div class="footer-section about">
            <h1 class="orangeIcon"><span>Waste-Not</span></h1>
            <p>
              Waste-Not is a fictional website created for a CFG project.
            </p>
            <div class="contact">
              <span><i class="fas fa-phone"></i> &nbsp; 12345 777 888</span>
              <span><i class="fa fa-envelope"></i> &nbsp; info@waste-not.net</span>
            </div>
            <div class="socials">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>

          <div class="footer-section social"></div>
          <div class="footer-section contact-form"></div>
        </div>

        <div class="footer-bottom"></div>
          &copy; Waste-Not.net | Designed by Ellie Phelps, Laura Waring and Georgie Ford
      </div>
    // <div className="border-t-[1px] border-lime-200/100 bg-gradient-to-r from-gray-50 to-gray-100 pt-5 mt-20">
    //   <div className="flex justify-between flex-wrap">
    //     <div className="order-3 mt-1 flex-shrink-0 w-full sm:order-2 sm:mt-10 sm:w-auto">
    //       <p className="text-gray-700 text-sm text-center m-10">
    //         Waste-Not was built by Laura W, Georgie F, and Ellie P.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
