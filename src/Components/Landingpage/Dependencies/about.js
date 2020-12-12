import React from 'react'

export const About =(props) => {
  return (
    <div>
       <section id="about" className="about">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box"></div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2 link href='#about'>About Us</h2>
                 <p>{props.content.string_1}</p> 
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bx bx-fingerprint" /></div>
                <h4 className="title"><a href>Market</a></h4>
                <p className="description">{props.content.string_2}</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon"><i className="bx bx-gift" /></div>
                <h4 className="title"><a href>HISTORY</a></h4>
                <p className="description">{props.content.string_3}</p>
            </div>
          </div>
        </div>
        </section>
        <section className="about-lists">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
              <span>01</span>
              <h4>Recent developments</h4>
              <p> Worldpress.org lists The Hindu as a left-leaning independent newspaper.</p>
            </div>
            <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={100}>
              <span>02</span>
             <p>{props.content.string_3}</p> 
              <h4>Management</h4>
              <p>Over the course of its history, the Kasturi Ranga Iyengar family has usually run The Hindu through the presence of family in editorial and business operations as well as on the Board. It was headed by G. Kasturi from 1965 to 1991, N. Ravi from 1991 to 2003, and by his brother, N. Ram, from 27 June 2003 to 18 January 2011.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

    