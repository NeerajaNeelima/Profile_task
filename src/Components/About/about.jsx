import React, { useEffect,useState } from 'react'
import Log3 from '../../images/logo-3-color.png' 
import Log1 from '../../images/logo-1-color.png'
import Log2 from '../../images/logo-2-color.png'
import Log4 from '../../images/logo-4-color.png'
import Log5 from '../../images/logo-5-color.png'
import Log6 from '../../images/logo-6-color.png'
import Avatar4 from '../../images/avatar-4.png'
import Quot from '../../images/icon-quote.svg'
import IconDesign from '../../images/icon-design.svg'
import IconApp from '../../images/icon-app.svg'
import IconDev from '../../images/icon-dev.svg'
import IconPhoto from '../../images/icon-photo.svg'
import { AiOutlineClose } from "react-icons/ai";
//import { BsBook,BsChevronDown,BsFillSendFill } from "react-icons/bs";
const About = ({userData}) => {
  
  useEffect(() => {
    
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");
  
    // Check if all required elements exist before adding event listeners
    if (testimonialsItem && modalContainer && modalCloseBtn && overlay && modalImg && modalTitle && modalText) {
      const testimonialsModalFunc = function () {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
      };
  
      const handleTestimonialItemClick = (item) => {
        modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
  
        testimonialsModalFunc();
      };
  
      for (let i = 0; i < testimonialsItem.length; i++) {
        testimonialsItem[i].addEventListener("click", function () {
          handleTestimonialItemClick(this);
        });
      }
  
      modalCloseBtn.addEventListener("click", testimonialsModalFunc);
      overlay.addEventListener("click", testimonialsModalFunc);
  
      return () => {
        modalCloseBtn.removeEventListener("click", testimonialsModalFunc);
        overlay.removeEventListener("click", testimonialsModalFunc);
  
        for (let i = 0; i < testimonialsItem.length; i++) {
          testimonialsItem[i].removeEventListener("click", function () {
            handleTestimonialItemClick(this);
          });
        }
      };
    }
  }, []);
  


const { testimonials } = userData.user;
  return (
    <article className='about active'>

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        {userData.user.about.subTitle}
      </p>

      <p>
        {userData.user.about.description}
      </p>
    </section>

  <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

        <li className="service-item">

          <div className="service-icon-box">
            <img src={IconDesign} alt="design icon" style={{width:"40"}} />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web design</h4>

            <p className="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={IconDev} alt="Web development icon" style={{ width:"40"}}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Web development</h4>

            <p className="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={IconApp} alt="mobile app icon" style={{width:"40"}} />
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Mobile apps</h4>

            <p className="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>

        </li>

        <li className="service-item">

          <div className="service-icon-box">
            <img src={IconPhoto} alt="camera icon" style={{ width:"40"}}/>
          </div>

          <div className="service-content-box">
            <h4 className="h4 service-item-title">Photography</h4>

            <p className="service-item-text">
              I make high-quality photos of any category at a professional level.
            </p>
          </div>

        </li>

      </ul>

  </section>


   

    <section className="testimonials">

    <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonal,index)=>
              <li className="testimonials-item" data-testimonials-item key={index}>
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img src={testimonal.image} alt="Daniel lewis" style={{ width: "60px" }} data-testimonials-avatar />
              </figure>
              <h4 className="h4 testimonials-item-title" data-testimonials-title>{testimonal.name}</h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  {testimonal.review}
                </p>
              </div>
            </div>
        </li>

          )}
      </ul>

</section>


   

    <div className="modal-container" data-modal-container>

      <div className="overlay" data-overlay></div>

      <section className="testimonials-modal">

        <button className="modal-close-btn" data-modal-close-btn>
        <AiOutlineClose />
        </button>

        <div className="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img src={Avatar4} alt="Daniel lewis" style={{width:"80"}}  data-modal-img/>
          </figure>

          <img src={Quot} alt="quote icon"/>
        </div>

        <div className="modal-content">

          <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

          <time datetime="2021-06-14">14 June, 2021</time>

          <div data-modal-text>
            <p>
              Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
              lot of experience
              and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
              consectetur adipiscing
              elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>

        </div>

      </section>

</div>


    

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src={Log1} alt="client logo" />
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={Log2} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={Log3} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={Log4} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={Log5} alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src={Log6} alt="client logo"/>
          </a>
        </li>

      </ul>

      </section>
          

  </article>
  )
}

export default About