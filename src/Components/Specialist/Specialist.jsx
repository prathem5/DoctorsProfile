import './Specialist.css'
import elbo from "../../Image/elbow (5).png"
import wrist from "../../Image/pelvis (1).png"
import shoul from "../../Image/shoulder (2).png"
import hipp from "../../Image/pelvis (1).png"
import knee from "../../Image/broken-bone (1).png"
import foot from "../../Image/pain (1).png"
import spin from "../../Image/spine (3).png"
import rheuma from "../../Image/injury (1).png"
function Specialist() {
  return (
    <>
     <section className='sec'>
        <div className="container">
             <div id="pg-108-5" className="panel-grid panel-has-style specialTop ">
  <div
    className="specialties siteorigin-panels-stretch panel-row-style panel-row-style-for-108-5"
    data-stretch-type="full"
    style={{
      marginLeft: "-64.4px",
      marginRight: "-64.4px",
      paddingLeft: "64.4px",
      paddingRight: "64.4px",
      
    }}
  >
    <div id="pgc-108-5-0" className="panel-grid-cell">
      <div
        id="panel-108-5-0-0"
        className="so-panel widget widget_classictextwidget classic-textwidget custom-classic-textwidget panel-first-child panel-last-child"
        data-index={5}
      >
        {" "}
        <div className="classic-text-widget">
          <h2>Our Specialties</h2>
          <div className="linefooter">
          <p>
            Our doctors and staff are dedicated to caring for you from head to
            toe. From neck injuries to foot and ankle pain, our physicians are
            passionate about treating your condition and helping you recover
            completely.
          </p>
          </div>
          
          <ul className="grid-list">
            <li
              className="delay0 eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn"
              style={{ visibility: "visible", marginTop: "45px" }}
            >
              <a href="/specialties/hand-wrist/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={wrist}
                  alt="Hand & Wrist"
                />
                </div>
                <h3>Hand &amp; Wrist</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay1"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/elbow/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={elbo}
                  alt="Elbow"
                />
                </div>
                <h3>Elbow</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay2"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/shoulder/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={shoul}
                  alt="Shoulder"
                />
                </div>
                <h3>Shoulder</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay3"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/hip/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={hipp}
                  alt="Hip"
                />
                </div>
                <h3>Hip</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay4"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/knee/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={knee}
                  alt="Knee"
                />
                </div>
                <h3>Knee</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay5"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/foot-ankle/" className="hvr-grow">
                <div className="special-icons">

                <img
                  decoding="async"
                  src={foot}
                  alt="Foot & Ankle"
                />
                </div>
                <h3>Foot &amp; Ankle</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay6"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/spine-care/" className="hvr-grow">
              <div className="special-icons">

                <img
                  decoding="async"
                  src={spin}
                />
</div>
                <h3>Spine</h3>
              </a>
            </li>
            <li
              className="eds-on-scroll eds-scroll-visible animated fadeInRight duration2 fadeIn delay7"
              style={{ visibility: "visible" }}
            >
              <a href="/specialties/rheumatology/" className="hvr-grow">
              <div className="special-icons">

                <img
                  decoding="async"
                  src={rheuma}
                />
</div>
                <h3>Rheumatology</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="pgc-108-5-1" className="panel-grid-cell">
      <div
        id="panel-108-5-1-0"
        className="widget_text so-panel widget widget_custom_html panel-first-child panel-last-child"
        data-index={6}
      >
        <div className="textwidget custom-html-widget">
          <div className="body-chart">


            <img
              decoding="async"
              src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/97/2017/12/body-figures.png"
            />

            <a href="/specialties/hand-wrist/" className="marker hand-wrist" />
            <a href="/specialties/elbow/" className="marker elbow" />
            <a href="/specialties/shoulder/" className="marker shoulder" />
            <a href="/specialties/hip/" className="marker hip" />
            <a href="/specialties/knee/" className="marker knee" />
            <a href="/specialties/foot-ankle/" className="marker foot-ankle" />
            <a href="/specialties/spine-care/" className="marker spine" />
            <a href="/specialties/spine-care/" className="marker spine2" />
            <a href="/specialties/spine-care/" className="marker spine3" />
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

export default Specialist
