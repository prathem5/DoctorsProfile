import './booking.css'
function Booking() {
  return (
    <>
      <section className="appoinment pt_185 xs_pt_70 pb_100 xs_pb_70 mt-5 mb-5">
  <div className="container" bis_skin_checked={1}>
    <div
      className="appoinment_bg"
      bis_skin_checked={1}
      style={{
        backgroundImage:
          'url("https://html.themefax.com/madifax/images/appointment_bg.jpg")'
      }}
    >
      <div className="appoinment_overlay" bis_skin_checked={1}>
        <div className="row" bis_skin_checked={1}>
          <div
            className="col-xl-7 col-lg-7 wow fadeInLeft"
            data-wow-duration="1s"
            bis_skin_checked={1}
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="appoinment_form" bis_skin_checked={1}>
              <div className="common_heading mb_30" bis_skin_checked={1}>
                <h5>Appointment</h5>
                <h2>Apply For Free Now</h2>
              </div>
              <form action="#">
                <div className="row" bis_skin_checked={1}>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                      <input type="text" placeholder="Patient Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                      <select
                        className="select_2 select2-hidden-accessible"
                        data-select2-id="select2-data-1-ayd1"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-3-oein">
                          Select Department
                        </option>
                        <option value="">Cardiology</option>
                        <option value="">Ophthalmology</option>
                        <option value="">Pediatric</option>
                        <option value="">Radiology</option>
                        <option value="">Urology</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-gro6"
                        style={{ width: 203 }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-owyu-container"
                            aria-controls="select2-owyu-container"
                          >
                            <span
                              className="select2-selection__rendered custom-cursor-on-hover"
                              id="select2-owyu-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select Department"
                            >
                              Select Department
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                 
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                      <input
                        type="date"
                        className="custom-cursor-default-hover"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                      <select
                        className="reservation_input select_2 select2-hidden-accessible"
                        data-select2-id="select2-data-7-hwf6"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-9-2cdc">
                          Select Time
                        </option>
                        <option value="">10.00 am to 11.00 am</option>
                        <option value="">11.00 am to 12.00 pm</option>
                        <option value="">3.00 pm to 4.00 pm</option>
                        <option value="">4.00 pm to 5.00 pm</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-8-y1pe"
                        style={{ width: 215 }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-pg2y-container"
                            aria-controls="select2-pg2y-container"
                          >
                  
                              <input 
                               className="select2-selection__rendered"
                               id="select2-pg2y-container"
                               role="textbox"
                               aria-readonly="true"
                               title="Select Time"
                              type="time" name="time"  placeholder='Time'/>
                           
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6" bis_skin_checked={1}>
                    <div className="appoinment_form_input" bis_skin_checked={1}>
                     

                      <butto className="common_btn" >book appoinment</butto>
                     
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4" bis_skin_checked={1}>
            <div className="appoinment_img" bis_skin_checked={1}>
              <img
                src="https://html.themefax.com/madifax/images/appoinment_img.png"
                alt="appointment"
                className="img-fluid w-100"
              />
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

export default Booking
