const Footer = () => {
  return (
    <div class="footer">
        <div class="footer-content">

          <div class="footer-section about">
            <h1 class="title"><span>Waste-Not</span></h1>
            <p>
              Waste-Not is a fictional website created for a CFG project.
            </p>
            <div class="contact">
              <span><i class="fa fa-phone"></i> &nbsp; 12345 777 888</span>
              <span><i class="fa fa-envelope"></i> &nbsp; info@waste-not.net</span>
            </div>

            <div class="socials">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </div>
          </div>

          <div class="footer-section links">
            <h2>Quick Links</h2>
            <br>
            <ul>
              <a href="#"><li>Events</li></a>
              <a href="#"><li>Meet The Team</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Charities</li></a>
              <a href="#"><li>Terms and Conditions</li></a>
            </ul>
            </br>
          </div>

          <div class="footer-section contact-form">
            <h2>Contact us</h2>
            <br></br>
            <form action="index.html" method="post">
              <input type="email" name="email" class="text-input contact-input" placeholder="Your email address..."></input>
              <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
              <button type="submit" className="btn btn-big">
                <i className="fas fa-envelope"></i>
                Send
              </button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          &copy; Waste-Not.net | Designed by Ellie Phelps, Laura Waring and Georgie Ford
        </div>
      </div>
  );
};

export default Footer;
