import  './aboutp.css'

import spine from "../../Image/spine (3).png"
import rib from "../../Image/injury (1).png"
import knee from "../../Image/broken-bone (1).png"
import elbow from "../../Image/elbow (5).png"
import Count from '../Count/Count';
function AboutPage() {
  return (
    <>
       <div className="banner-container">
      <div className="banner-cntent">
        <div className="about-h">
          

        <h1>Welcome to Our Website!</h1>
        
        </div>
      </div>
    </div>
     <section>
      <div className="container">
      <div className='about-cont '>
      <div className="row">
         <div className="col-lg-6">
          <div className="about-img">
          <img src="https://imgs.search.brave.com/ag3XuHO7AUGNx7V9KpX3fQfjwTTQKHQ8iZRKWdizfxg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA4/MDYwNDg4Mi9waG90/by90aGUtZG9jdG9y/LWlzLWV4cGxhaW5p/bmctYWJvdXQtdGhl/LWJyYWluLXgtcmF5/LXJlc3VsdHMtdG8t/YS1mZW1hbGUtcGF0/aWVudC1seWluZy1p/bi1iZWQtYXQtYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/QXVvUkdFUW9aVVJo/aEFvRzBJbldSenJj/ZUJfUC1ONmpnamly/LUp4eWVGbz0" alt="Banner"  />
          </div>
          </div>


        <div className="col-lg-6">
          <div>
            
            <h5>About-us</h5>
         
          </div>
          <div className="mt-3">
            <div className="abouth1">
            
            <h1>Shortly About Us</h1>
            
            </div>
          </div>
          <div className=" mt-3">
            <div className="aboutpara">

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum convallis justo vel pulvinar. Integer
              dignissim aliquam eros. Duis eget purus eu ligula fringilla fermentum. Nulla facilisi. In hac habitasse
              platea dictumst. Sed euismod quam eu odio rhoncus, vitae sollicitudin sem fermentum. Nulla sit amet justo
              nec sem hendrerit feugiat sit amet et ipsum. Vivamus semper libero sed dictum convallis. Duis nec
              pellentesque lorem.
            </p>
            </div>
          </div>
          <div className="about-bt">
            <a>Learn More</a>
          </div>
          </div>
       
     
    </div>
    </div>
      </div>
     </section>
     
     <Count/>

     <section className="whyChooseUS " id="whyUs">
  <div className="container">
    <div className="titleSection">
      <h2 className="bingo">Why Choose Us</h2>

    </div>
    <div className="row">
      <div className="col-lg-4 col-12 d-flex justify-content-lg-start justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12 col-md-6 justify-content-center align-items-center mb-5">
            <div className="whyUsCard">
              <div className="whyUsIcon">
              <div className="body-part">
                <img src={rib} alt="" />
                </div>
              </div>
              <div className="whyUsTitle">
                <h3>Neck</h3>
              </div>
              <div className="whyUsText">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ullam!
                  care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 justify-content-center align-items-center mb-5">
            <div className="whyUsCard">
              <div className="whyUsIcon">
                <div className="body-part">
              <img  src={spine}/>

                </div>
              </div>
              <div className="whyUsTitle">
                <h3>Spine</h3>
              </div>
              <div className="whyUsText">
                <p>
                 Lorem ipsum dolor sit amet consectetu Voluptatem maxime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
        <div className="whyChooseImg">
          <img src="https://zeqons.us/wp-content/uploads/2020/05/Orthopedics.png" alt="" />
        </div>
      </div>
      <div className="col-lg-4 col-12 d-flex justify-content-lg-end justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-12 justify-content-center align-items-center mb-5">
            <div className="whyUsCard">
              <div className="whyUsIcon">
              <div className="body-part">
               <img src={elbow} alt="" />
              </div>
              </div>
              <div className="whyUsTitle">
                <h3>Elbow</h3>
              </div>
              <div className="whyUsText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 col-12 justify-content-center align-items-center mb-5">
            <div className="whyUsCard">
              <div className="whyUsIcon">
              <div className="body-part">
                
            <img src={knee} alt="" />
                </div>

              </div>
              <div className="whyUsTitle">
                <h3>Knee</h3>
              </div>
              <div className="whyUsText">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, laboriosam!.
                </p>
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

export default AboutPage
