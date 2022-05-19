const Footer = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  return (
    <div className="footer">
        <div className="footer-content">

          <div className="footer-section about">
            <h1 className="title"><span>Waste-Not</span></h1>
            <p>
              Waste-Not is a fictional website created for a CFG project.
            </p>
            <div className="contact">
              <span><i className="fa fa-phone"></i> &nbsp; 12345 777 888</span>
              <span><i className="fa fa-envelope"></i> &nbsp; info@waste-not.net</span>
            </div>

            <div className="socials">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <br />
            <ul>
              <a href="#"><li>Events</li></a>
              <a href="#"><li>Meet The Team</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Charities</li></a>
              <a href="#"><li>Terms and Conditions</li></a>
            </ul>
            <br />
          </div>

          <div className="footer-section contact-form">
            <h2>Contact us</h2>
            <br />
            <form action="index.html" method="post">
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..."></input>
              <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" className="btn btn-big">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; Waste-Not.net | Designed by Ellie Phelps, Laura Waring and Georgie Ford
        </div>
      </div>
  );
};

export default Footer;
