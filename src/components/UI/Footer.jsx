const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="title">
            <span>Waste-Not</span>
          </h1>
          <br />
          <p>Waste-Not is a fictional website created for a CFG project.</p>
          <br />
          <div className="contact">
            <span>
              <i className="fa fa-phone"></i> &nbsp; 12345 777 888
            </span>
            <span>
              <i className="fa fa-envelope"></i> &nbsp; info@waste-not.net
            </span>
          </div>

          <div className="socials">
            <a href="https://facebook.com">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/waste.not.cfg/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://twitter.com">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
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

        <div className="footer-section contact-form">
          <h2>Contact us</h2>
          <br />
          <form action="index.html" method="post">
            <input
              type="email"
              name="email"
              className="text-input contact-input"
              placeholder="Your email address..."
            ></input>
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message..."
            ></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fa fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; Waste-Not.net | Designed by Ellie Phelps, Laura Waring and
        Georgie Ford
      </div>
    </div>
  );
};

export default Footer;
