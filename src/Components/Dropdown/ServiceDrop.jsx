import "./drop.css"
import serviceJson from "../DropData/ServiceData"
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ServiceDrop() {
  const search = useLocation()
  const path = search.pathname;
  const [serviceData,setServiceData]= useState(serviceJson)
  console.log(path)
  const EventsF =  serviceData.find((e)=> e.slug === path)
  console.log(EventsF)
  return (
    <>
 
 <div className="banner-container">
      <div className="banner-servicescontent">
        <div className="about-h">
      
      
        <h1>Our Service's</h1>
        
        </div>
      </div>
    </div>
  

  <section>
    <div className="container">
    <section className="service_details pt_100 xs_pt_70 pb_100 xs_pb_70">
  <div className="container" bis_skin_checked={1}>
    <div className="my-5">
      <h3 className="fs-1 ">{EventsF.h1}</h3>
      <div className="devicer " />
    </div>
    <div className="row" bis_skin_checked={1}>
      <div
        className="col-xl-12 col-lg-12 mb-sm-3 sm-mb-3 wow fadeInLeft"
        data-wow-duration="1s"
        bis_skin_checked={1}
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInLeft"
        }}
      >
        <div className="service_dstails_img" bis_skin_checked={1}>
          <span>
            {/* <i className="fas fa-heartbeat" aria-hidden="true" /> */}
          </span>
          <img
            src={EventsF.ServiceImage}
            alt="service"
            className="img-fluid w-100"
          />
        </div>
        <div className="tf_service_details_text" bis_skin_checked={1}>
          {EventsF.h3}
          <h3>{EventsF.heading}</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga quod, nisi mollitia veniam eaque magnam nesciunt numquam, ullam dolor ea eum? Voluptate provident ipsum ipsa blanditiis voluptas quam asperiores consequuntur in dolores beatae, ipsam maxime magnam consequatur repudiandae, voluptatibus est quidem? Suscipit, eveniet recusandae.
          </p>
          <h6>{EventsF.why}</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's is a standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book Et harum. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's is a standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book Et harum.
          </p>
          <h5> {EventsF.benifit}</h5>
          <ul>
            <li>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis necessitatibus ipsam veniam iste eum!
            </li>
            <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis necessitatibus ipsam veniam iste eum!
            </li>
            <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis necessitatibus ipsam veniam iste eum!
            </li>
            <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis necessitatibus ipsam veniam iste eum!
            </li>
            <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis necessitatibus ipsam veniam iste eum!
            </li>
          </ul>
          <h3>Surgery Images</h3>
          <p>
            Aorem Ipsum is simply dummy text of the printing anda typesetting
            industry. Lorem Ipsum has been the indust ry's is astandard dummy
            Lorem Ipsum is simply dummy ypesetting industry.
          </p>
          <p>
            Aorem Ipsum is simply dummy text of the printing anda typesetting
            industry. Lorem Ipsum has been the indust ry's is astandard dummy
            Lorem Ipsum is simply dummy ypesetting industry.
          </p>
        </div>
        <div className="row" bis_skin_checked={1}>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
            <div
              className="ant-image css-1drr2mu"
              style={{ width: 300, height: 200 }}
            >
              <img
                className="ant-image-img css-1drr2mu"
                src={EventsF.ServiceImgTwo}
                width={300}
                height={200}
                style={{ height: 200 }}
              />
              <div className="ant-image-mask">
                <div className="ant-image-mask-info">
                  <span
                    role="img"
                    aria-label="eye"
                    className="anticon anticon-eye"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="eye"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                    </svg>
                  </span>
                  Preview
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
            <div
              className="ant-image css-1drr2mu"
              style={{ width: 300, height: 200 }}
            >
               <img
                className="ant-image-img css-1drr2mu"
                src={EventsF.ServiceImgTwo}
                width={300}
                height={200}
                style={{ height: 200 }}
              />
             
            </div>
          </div>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={2}>
            <div
              className="ant-image css-1drr2mu"
              style={{ width: 300, height: 200 }}
            >
              <img
                className="ant-image-img css-1drr2mu"
                src={EventsF.ServiceImgTwo}
                width={300}
                height={200}
                style={{ height: 200 }}
              />
              <div className="ant-image-mask custom-cursor-on-hover">
                <div className="ant-image-mask-info">
                  <span
                    role="img"
                    aria-label="eye"
                    className="anticon anticon-eye"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="eye"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
                    </svg>
                  </span>
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 shadow" bis_skin_checked={3}>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
            <div className="tf_service_dtls_process" bis_skin_checked={1}>
              <i className="fas fa-eye" aria-hidden="true" />
              <h5>Appointment</h5>
              <p>
                Lorem ipsum dolor sit amet sectetur adipiscng elit sed doing
                smod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
            <div className="tf_service_dtls_process" bis_skin_checked={1}>
              {/* <i className="fas fa-heartbeat" aria-hidden="true" /> */}
              <h5>Instant Checkup</h5>
              <p>
                Lorem ipsum dolor sit amet sectetur adipiscng elit sed doing
                smod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6" bis_skin_checked={1}>
            <div className="tf_service_dtls_process" bis_skin_checked={1}>
              <i className="fad fa">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z" />
                </svg>
              </i>
              <h5>Get Report</h5>
              <p>
                Lorem ipsum dolor sit amet sectetur adipiscng elit sed doing
                smod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  </section>
 
 
  
</>

    
  )
}

export default ServiceDrop
