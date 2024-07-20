import "./review.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  div,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


function Tesntimonial() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <div md="10" xl="8" className="text-center">


      
          <h3 className="mb-4 testimonial-h">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </MDBRow>
      <MDBRow className="text-center">
      <Swiper className="mySwiper"
       slidesPerView={1}
       spaceBetween={10}
       pagination={{
         clickable: true,
       }}
         breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
        <div md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <div className="testimonial-img">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
            </div>
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Patient</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
            <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <div className="testimonial-img">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
            </div>
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Patient</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <div className="testimonial-img">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
            </div>
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Patient</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <div className="testimonial-img">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
            </div>
          </div>
          <h5 className="mb-3">Maria Smantha</h5>
          <h6 className="text-primary mb-3">Patient</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </div>
        </SwiperSlide>
     
   
      </Swiper>
      </MDBRow>
    </MDBContainer>
  
  )
}

export default Tesntimonial
