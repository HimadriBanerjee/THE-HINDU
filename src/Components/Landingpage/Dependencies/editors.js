import React from 'react'

export function Editors() {
  return (
    <div>
      <section id="editors" className="editors">
        <div className="container">
          <div className="section-title">
            <h2>Editors</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="info-box">
                <i className="bx bx-map" />
                <h3>S Iyer</h3>
                <p> (1878–1898)</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
              <div className="info-box">
                <i className="bx bx-envelope" />
                <h3>C. Karunakara Menon </h3>
                <p> (1898–1905)</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
              <div className="info-box ">
                <i className="bx bx-phone-call" />
                <p>Kasturi Ranga Iyengar </p>
                <h3> (1905–1923)</h3>
              </div>
            </div>
            </div>
          </div>
      </section>
    </div>
  )
}