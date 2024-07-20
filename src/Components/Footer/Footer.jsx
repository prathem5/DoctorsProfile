import  './Footer.css'
import drlogo from "../../Image/dr rahul.png"
function Footer() {
  return (
    <>
       <div className="footer pt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 border-end border-bottom">
        <div className="address_main">
          <div className="footer-logo">
            <a href="/">
              <img
                src={drlogo}
                className="img-responsive"
                alt="footer_logo"
              />
            </a>
          </div>
          <p>
            , Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad sunt, tempora voluptates dolor voluptas, numquam consequuntur cum fugit velit error ea corrupti quo ducimus repellendus voluptatibus beatae odit excepturi exercitationem consequatur neque nihil optio!
          </p>
        </div>
      </div>
      <div className="col-md-8 border-bottom">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-head">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-link">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-page">About Us</a>
                </li>
                <li>
                  <a href="/hospital-in-andheri-west">FAQ</a>
                </li>
                <li>
                  <a href="/PatientCare">PORTFOLIO</a>
                </li>
                <li>
                  <a href="/Internationalpt">International</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-head">
              <h3>Department</h3>
            </div>
            <div className="footer-service">
              <ul>
                <li>
                  <a href="/best-orthopedic-hospitals-andheri">Orthopedic</a>
                </li>
                <li>
                  <a href="/best-gynecology-hospitals-andheri">Gynecology</a>
                </li>
                <li>
                  <a href="/best-cardiac-hospital-andheri">Cardiology</a>
                </li>
                <li>
                  <a href="/pediatric-hospital-andheri">Pediatric</a>
                </li>
                <li>
                  <a href="/top-neurosurgery-hospital-andheri">Neurology</a>
                </li>
                <li>
                  <a href="/nephrologists-andheri-kidney-care">Nephrology</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-head">
              <h3>Contact US</h3>
            </div>
            <div className="footer-add">
              <ul>
                <li>
                  <a
                    href="https://goo.gl/maps/kWwvaWUiQbZ3qMYPA"
                    target="blank"
                  >
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Road, Lorem, ipsum dolor.i, Lorem. (W), Mumbai-400000
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-icon">
              <ul>
                <li>
                  <i>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z" />
                    </svg>
                  </i>
                  <span>Call us : </span>{" "}
                  <a href="tel:+91 8104560800">+91 00000000</a>
                </li>
                <li>
                  <i>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" />
                    </svg>
                  </i>
                  <span>Email : </span>
                  <a href="mailto: info@thungasthhospitals.com">
                    info@ysgdcdygvcddcgv.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row p-3">
      <div className="col-md-6">
        <div className="copyright-text">
          <p>
            Copyright © 2024, All Right Reserved{" "}
            <a href="index.html">
              <strong>Doctor Name</strong>
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="footer-menu">
          <div className="copyright-text text-center">
            <p>
              Developed by
              <a href="https://thinksolution.github.io/home/" target="blank">
                <strong>&nbsp; Beyond Tech</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
