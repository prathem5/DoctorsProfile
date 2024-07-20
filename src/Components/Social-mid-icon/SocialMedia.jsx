import"./icon.css"
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function SocialMedia() {
  return (
    <>
         <div className="icon-bar1">
      
      <a target="_blank" href="https://wa.me/+918976256998?text=">
      
        <div className="what ">
        <i className="fa fa-whatsapp callus" aria-hidden="true" ><FaWhatsapp /></i>
        </div>
        <div className="what">
        <i className="fa fa-whatsapp callus" aria-hidden="true" ><FaFacebook /></i>
        </div>
        <div className="what">
        <i className="fa fa-whatsapp callus" aria-hidden="true" ><FaTwitter />
</i>
        </div>
        
      </a>
    </div>
    </>
  )
}

export default SocialMedia
