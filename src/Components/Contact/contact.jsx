import React, { useState ,useEffect} from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {

    const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    const handleFormInput = () => {
      const isValid = form.checkValidity();
      setIsFormValid(isValid);
      if (isValid) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    };

    formInputs.forEach((input) => {
      input.addEventListener("input", handleFormInput);
    });

    return () => {
      formInputs.forEach((input) => {
        input.removeEventListener("input", handleFormInput);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };
  return (
    <article className='Contact active' data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2122049910164!2d88.36389251495974!3d22.5726469851798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027714b8e2edb7%3A0xe43e54fbd96774a!2sIndia!5e0!3m2!1sen!2sin!4v1647608789441!5m2!1sen!2sin"
            width="400" height="300" loading="lazy" title="Google Map of India"></iframe>
        </figure>
      </section>


      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button className="form-btn" type="submit" disabled={!isFormValid} data-form-btn>
            <BsFillSendFill style={{ color: 'hsl(45,100%,72%)' }} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
  
    </article>
  )
}

export default Contact