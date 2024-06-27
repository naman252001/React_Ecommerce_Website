const Footer = () => {
    return ( 
        <>

        
            <footer id="footer" style={{margintop: "50px"}}>
<div className="footer-top">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 footer-content">
                <h3>Fashion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, hic?</p>
                
                    Bhilai <br/>
                    Raipur <br/>
                    Hydrabad <br/>
                
                <strong><i className="fas fa-phone"></i> Phone: <strong>+91 9340050737</strong></strong><br/>
                <strong><i className="fa-solid fa-envelope"></i> Email: <strong>namanpandey@gmail.com</strong></strong>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Privacy policay</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, rem!</p>
                <ul>
                    <li><a href="#">Smart phone</a></li>
                    <li><a href="#">Smart watch</a></li>
                    <li><a href="#">Airpods</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Network</h4>
                <p>Welcome to our social media </p>
                <div className="socail-links mt-3">
                    <a href="#" className="twiiter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="twiiter"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" className="twiiter"><i className="fa-brands fa-google-plus"></i></a>
                    <a href="https://www.instagram.com/?hl=en" target="_blank" className="twiiter"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/naman-pandey-b3ab2b249/" target="_blank" className="twiiter"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<hr/>
<div className="container py-4">
    <div className="copyright">
        &copy; Copyright <strong>Fashion</strong>.All Rights Reserved
    </div>
    <div className="credits">
        Designed By <a href="https://www.linkedin.com/in/naman-pandey-b3ab2b249/" target="_blank">Naman Pandey</a>
    </div>
</div>
</footer>

<a href="#" className="arrow"><i><img src="up-arrow.png" alt="" width="50px"/></i></a>

        </>
     );
}
 
export default Footer;