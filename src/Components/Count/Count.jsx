import  './count.css'
import { MdLocalHospital } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
function Count() {
  return (
    <>
        <div id="fun-facts" className="fun-facts section overlay">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-fun">
          <i className="icofont"> <MdLocalHospital /></i>
          <div className="content">
            <span className="counter">
              <span>3,468</span>
            </span>
            <p>Hospital Rooms</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-fun">
          <i className="icofont"><CgProfile /></i>
          <div className="content">
            <span className="counter">
              <span>557</span>
            </span>
            <p>Specialist Doctors</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-fun">
          <i className="icofont"><FaRegSmile /></i>
          <div className="content">
            <span className="counter">
              <span>4,379</span>
            </span>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-fun">
          <i className="icofont"><FaCalendarAlt /></i>
          <div className="content">
            <span className="counter">
              <span>32</span>
            </span>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
       
   

    </>
  )
}

export default Count
