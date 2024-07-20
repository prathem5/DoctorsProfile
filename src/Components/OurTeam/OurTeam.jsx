import "./ouryeam.css"

function OurTeam() {
  return (
    <>
      <section id="ourTea" style={{ backgroundColor: "#eee" }}>
  <div className="titleSection">
    <h2>Our Team</h2>
  </div>
  <div className="container p-0 m-0">
    <div className="row d-flex justify-content-center align-content-center mt-5">
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCar">
          <div className="teamImag">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Mithilesh Pagdhare" />
          </div>
          <div className="teamNam">
            <h3>Our Team </h3>
            <p>Executive Chef</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCar">
          <div className="teamImag">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Swaraj Raut" />
          </div>
          <div className="teamName">
            <h3>Our Team </h3>
            <p>Management Team</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-content-center">
        <div className="teamCar">
          <div className="teamImag">
            <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" alt="Uplakshya Yadav" />
          </div>
          <div className="teamNam">
            <h3>Our Team </h3>
            <p>Management Team</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default OurTeam
