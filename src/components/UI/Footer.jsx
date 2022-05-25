const Footer = () => {
  return (
    <div className="footer text-slate-900 mt-20 border-t-[1px] border-lime-300/100" style={{ backgroundColor: "rgb(252, 249, 250)", opacity: 0.8 }}>
      <div className="footer-content flex max-w-6xl mx-auto text-center">
        <div className="footer-section about w-2/6 p-4">
          <h2 className="mb-4 font-bold">Waste-Not</h2>
          <p className="mb-4">Waste-Not is a fictional website created for a CFG project.</p>
          <div className="contact">
            <div>
              <i className="fa fa-phone"></i>&nbsp;&nbsp;12345 777 888
            </div>
            <div>
              <i className="fa fa-envelope"></i>&nbsp;&nbsp;info@waste-not.net
            </div>
          </div>
          <div className="socials">
            <a href="https://facebook.com" className="p-3 pb-0 text-xl">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/waste.not.cfg/" className="p-3 pb-0 text-xl">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://twitter.com" className="p-3 pb-0 text-xl">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links w-2/6 p-4">
          <h2 className="mb-4 font-bold">Quick Links</h2>
          <ul>
            <li>
              <a href="#">Meet The Team</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="https://www.theguardian.com/society/2021/jan/16/jack-monroe-on-food-poverty-and-fury-i-just-wake-up-look-at-the-news-and-get-angry">
                Food Waste News
              </a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
          <br />
        </div>

        <div className="footer-section contact-form w-2/6 px-8 py-4">
          <h2 className="mb-4 font-bold">Contact us</h2>
          <form className="flex flex-col items-center">
            <input
              type="email"
              name="email"
              className="w-60 max-w-full mb-2 p-2 border-[1px] border-slate-600 rounded"
              placeholder="Your email address..."
            ></input>
            <textarea
              name="message"
              type="text"
              className="w-60 max-w-full mb-2 p-2 border-[1px] border-slate-600 rounded"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="py-2 px-4 font-bold rounded-md text-white border-[1px] border-slate-600 bg-slate-500 hover:bg-slate-600 self-center">
              <i className="fa fa-envelope"></i>&nbsp;&nbsp;Send
            </button>
          </form>
        </div>
      </div>

      <div className="text-center bg-slate-900 text-white p-2">
        &copy; Waste-Not.net | Designed by Ellie Phelps, Laura Waring and
        Georgie Ford
      </div>
    </div>
  );
};

export default Footer;