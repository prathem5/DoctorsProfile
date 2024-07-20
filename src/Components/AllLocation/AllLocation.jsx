
import './allLocation.css';
import { FaMapMarkedAlt } from "react-icons/fa";

function AllLocation() {
  return (
    <>

    <section className="p-lg-5">
      <div className="container">

     
  <div className="textBox">
    <div className="heading-text primeColor text-center">Our Clinic</div>
  </div>
  <div className="container">
    <div className="row">
      <div className=" col-lg-6 ms-6 ">
        <div className="clinic1 rahul-loc">
          <h3>Rajmata Jijabai</h3>
          <p>
          Rajmata Jijabai, Raksha Multispecialty Hospital Manish Park ABC Road Pump, Andheri East, Mumbai, Maharashtra 400093
          </p>
          <h4>
            Phone:<span>+91 9833011340</span>
          </h4>
          <div className="single-inf">
                <i className="icofont"><FaMapMarkedAlt /></i>
          <a href="https://maps.app.goo.gl/XzmxnkTkSisZz5P6A"> 
                <h5>View large map</h5>
          </a>
              </div>
        </div>
      </div>
      <div className="col-lg-6 ms-6 rahul-loc ">
        <div className="clinic1">
          <h3>Hiranandani Hospital</h3>
          <p>
          Hiranandani Hospital Rd, Hillside Avenue Road, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076
          </p>
          
          <h4>
            Phone:<span>+91 9833011340</span>
          </h4>
          <div className="single-inf">
                <i className="icofont"><FaMapMarkedAlt /></i>
          <a href="https://maps.app.goo.gl/XzmxnkTkSisZz5P6A"> 
                <h5>View large map</h5>
          </a>
              </div>
          
        </div>
      </div>
     
    </div>
  </div>
  </div>
</section>

   
    </>
  );
}

export default AllLocation;
