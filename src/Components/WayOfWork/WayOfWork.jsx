import './wayof.css'
import { FaAmbulance } from "react-icons/fa";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { CiStethoscope } from "react-icons/ci";
function WayOfWork() {
  return (
    <>
    <section className="Feautes section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <h2>We Are Always Ready to Help You &amp; Your Family</h2>
          <img
            alt="#"
            loading="lazy"
            width={48}
            height={24}
            decoding="async"
            data-nimg={1}
            srcSet="https://mediplus-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection-img.7d6d5272.png&w=48&q=75"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection-img.7d6d5272.png&w=96&q=75"
            style={{ color: "transparent" }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
            aliquet. pretiumts
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-12">
        <div className="single-features">
          <div className="signle-icon">
            <i className="icofont"><FaAmbulance /></i>
          </div>
          <h3>Emergency Help</h3>
          <p>
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="single-features">
          <div className="signle-icon">
            <i className="icofont "><MdOutlineLocalPharmacy /></i>
          </div>
          <h3>Enriched Pharmecy</h3>
          <p>
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="single-features last">
          <div className="signle-icon">
            <i className="icofont "><CiStethoscope /></i>
          </div>
          <h3>Medical Treatment</h3>
          <p>
            Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
            vulputate.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default WayOfWork
