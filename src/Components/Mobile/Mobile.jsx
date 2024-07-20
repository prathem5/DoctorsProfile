import './mobile.css'
import { IoLogoGooglePlaystore } from "react-icons/io5";


function Mobile() {
  return (
    <>
    <section>
     <div className="container">
        <div className="mob-top">

     <div className="row d-flex justify-content-center align-items-center">
  {/*Column - Free Consultation*/}
  <div className="col-xl-6 col-md-5 mb-5 mb-md-0">
    <div className="card text-white  rounded-4">

        <div className="mobile-img">

      <img
        src="https://media.istockphoto.com/id/1407428943/photo/hand-holding-mobile-phone-with-blank-screen-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=-D0Fp_Q_xKwWWlknW01LQVw4V-stqdJA2Obz1rjIl2k="
        className="card-img"
        alt="..."
      />
        </div>
      <div className="mask gradient-theme" style={{ opacity: "0.95" }} />
      <div className="card-img-overlay d-flex align-items-center h-100 text-center">
        <div className="px-5">
          {/* <p
            style={{ fontFamily: '"Raleway", sans-serif' }}
            className="display-1 mb-0"
          >
            FREE
          </p>
          <p
            style={{ fontFamily: '"Raleway", sans-serif' }}
            className="card-title mb-3 h4"
          >
            CONSULTATION
          </p>
          <p className="card-text mb-4 text-start">
            Before we even start, we will analyze your business requirements in
            depth, and offer some advice on technology choice &amp; project
            roadmap. For free.
          </p> */}
          <div className="btnnn">

          <a href="#section-contact">
          <IoLogoGooglePlaystore />
          <h3>PlayStore</h3>
          </a>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  {/*/Column - Free Consultation*/}
  {/*Column - Process*/}
  <div className="col-xl-6 col-md-7">
    {/*Step 1*/}
    <div className="d-flex align-items-start ms-lg-4 ">
      
      <div className="flex-grow-1 ms-4">
      
      
      </div>
    </div>
    {/*/Step 1*/}
    {/*Step 2*/}
    <div className="d-flex align-items-start ms-lg-4 ">
      <div className="flex-shrink-0">
        <p
          className="fw-bold display-1 "
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          1
        </p>
      </div>
      <div className="flex-grow-1 ms-4">
        <h5 className=" fw-bold text-uppercase">About-App</h5>
        <p className="text-muted mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas unde, deserunt nesciunt ratione voluptatum repellat dicta, odit, cumque pariatur libero amet cupiditate architecto. Ex, non!
        </p>
      </div>
    </div>
    {/*/Step 2*/}
    {/*Step 3*/}
    <div className="d-flex align-items-start ms-lg-4 ">
      <div className="flex-shrink-0">
        <p
          className="fw-bold display-1 "
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          2
        </p>
      </div>
      <div className="flex-grow-1 ms-4">
        <h5 className=" fw-bold text-uppercase">Fast Service</h5>
        <p className="text-muted mb-5">
          After we make sure that the visual side of your idea is intuitive
          &amp; gorgeous, it is time to make it functional. We write clean code
          in accordance best practices in the industry.
        </p>
      </div>
    </div>
    {/*/Step 3*/}
    {/*Step 4*/}
    <div className="d-flex align-items-start ms-lg-4 ">
      <div className="flex-shrink-0">
        <p
          className="fw-bold display-1"
          style={{ fontFamily: '"Raleway", sans-serif' }}
        >
          3
        </p>
      </div>
      <div className="flex-grow-1 ms-4">
        <h5 className=" fw-bold text-uppercase">
          Online &amp; Consultancy
        </h5>
        <p className="text-muted mb-5">
          We test developed functionalities thoroughly and provide you with a
          Timesheet, with detailed descriptions of completed tasks.
        </p>
      </div>
    </div>
    {/*/Step 4*/}
  </div>
  {/*/Column - Process*/}
</div>
        </div>

     </div>
    </section>

    </>
  )
}

export default Mobile
