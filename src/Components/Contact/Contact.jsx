import './contect.css'
import { CiClock1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";


function Contact() {
  return (
    <>  
    <div className="breadcrumbs overlay">
      <div className="bgc-img">
       
        <div className="bread-inner">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>



    <section className="contact-us section">
      <div className="container">
        <div className="inner">
            <div className="contact-main-section">
            <div className="row">
        <div className="col-md-6">
          <div>
            <h2>Visit Us</h2>
            <p>
            <span className='addres-tag'>Address:</span> Ground Floor, Hiranandani Garden, Hiranandani Hospital Rd, opposite Poddar School, Hiranandani Gardens, Ramabai Ambedkar Nagar, Powai, Mumbai, Maharashtra 400076
            </p>
          </div>
          <div className='bottom-add'>
            <h2>Visit Us</h2>
            <p>
           <span className='addres-tag'> Address:</span>Raksha Multispeciality Hospital, Parsi Colony, Andheri East, Mumbai, Maharashtra 400047
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <h1>Contact Us</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Mobile No" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <button type="submit" className="f-bol">Send Message</button>
            </form>
          </div>
        </div>
      </div>
            </div>
        </div>
        <div className="contact-info">
            <div className="contact-main-sect">

          <div className="row">
            <div className="col-lg-4 col-12 ">
              <div className="single-inf">
                <i className="icofont"><BsFillTelephoneFill /></i>
                <div className="content">
                  <h3>91 9833011340</h3>
                  <p>info@drsinghaman.com</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-12 ">
              <div className="single-inf">
                <i className="icofont"><FaLocationDot /></i>
                <div className="content">
                  <h3>Our Loaction</h3>
                  <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div> */}
              <div className="col-lg-4 col-12 ">
              <div className="single-inf">
                <i className="icofont"><CiClock1 /></i>
                <div className="content">
                <h5>Rjmata Jijabai</h5>
                <p>Mon - Sat: 6:30am - 0pm</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 ">
              <div className="single-inf">
                <i className="icofont"><CiClock1 /></i>
                <div className="content">
                  <h2>Hiranandani</h2>
                  <p>Mon - Sat: 6:30am - 0pm</p>
                  <p>Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Contact
