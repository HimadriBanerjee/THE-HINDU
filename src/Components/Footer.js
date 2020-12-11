import React from 'react'

export default function Footer() {
  return (
    <div>
      <div>
      <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-info">
                <h3>Contact</h3>
                  <p>
                  CHENNAI 
                    <strong>Phone:</strong> 91-44-2857 6300<br />
                    <strong>Email:</strong>web.thehindu@thehindu.co.in<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p></p>
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                  </div>
                  </div>
                </div>
              </div>
              <div className="container">
            <div className="copyright">
              © Copyright <strong><span>TheHindu</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        </div>
</div>
)
}