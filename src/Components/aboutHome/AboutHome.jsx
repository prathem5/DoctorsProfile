
import React from 'react';
import './about.css';

function Counter() {
  return (
    <>
   
  <div className="container-fluid">
    <div className="well-mar">
      <div
        className="mad-colorizer-bg-color"
        style={{ left: "-16px", right: "-16px",  }}
      />
      <div className="row no-row-gap">
        <div className="col-xl-6">
          <div className="mad-img-container">
            <div className="mad-img">
              <img src="https://velikorodnov.com/html/mindwellness/images/880x936_img1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="mad-img-content">
            <div className="row justify-content-center">
              <div className="col-xxl-8">
                <div className="mad-pre-title">Welcome to</div>
                <h2 className="mad-title">
                  {" "}
                  Private Psychiatry <br /> &amp; Therapy Clinic{" "}
                </h2>
                <div className="mad-text-medium content-element-6">
                  <p>
                    {" "}
                    Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                    tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                    elit. Aenean auctor wisi et urna. Aliquam erat v olutpat.
                    Duis ac turpis. Integer rutrum ante eu lacus. Pellentesque
                    sed dolor. Aliquam congue fermentum nisl.
                  </p>
                  <p>
                    {" "}
                    Vestibulum libero nisl, porta vel, scelerisque eget,
                    malesuada at, neque. Quisque diam lorem, interdum
                    vitae,dapibus ac, scelerisque vitae, pede. Donec eget tellus
                    non erat lacinia fermentum. Donec in velit vel ipsum auctor
                    pulvinar. Nulla venenatis.{" "}
                  </p>
                </div>
                <a href="pages_team.html" className="common_btn">
                  meet our team
                </a>
              </div>
            
          </div>
        </div>
      </div>

    </div>
  

 
     
   
     
   
   
    

  </div>
  </div>


    </>
  );
}

export default Counter;
