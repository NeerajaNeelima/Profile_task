import React from 'react'
import { BsBook } from "react-icons/bs";
const Resume = ({userData}) => {

  const { timeline } = userData.user;
  const {skills} = userData.user;

  // Helper function to format dates
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
<article className='resume active' data-page="resume">

   <header>
   <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
        <BsBook style={{color: "hsl(45, 100%, 72%)"}}/>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Jawaharlal Nehru Technological University Gurjada Vizianagaram</h4>

          <span>2021 — 2024</span>

          <p className="timeline-text">
          Completed B.Tech in Computer Science and Engineering, passed out with 80% and received an honors degree.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Government Polytechnic Srikakulam</h4>

          <span>2018 — 2021</span>

          <p className="timeline-text">
          Completed Polytechnic with 95% in the Computer Science stream.
          </p>

        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Sri Gurunarayana Vidya Nikethan</h4>

          <span>2008 — 2018</span>

          <p className="timeline-text">
          Passed out from school with 97%.
          </p>

        </li>

      </ol>

    </section>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
        <BsBook style={{color: "hsl(45, 100%, 72%)"}}/>
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
          {timeline?.map((item, index) => ( // Use optional chaining here
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.jobTitle} at {item.company_name}</h4>
              <span>{formatDate(item.startDate)} — {formatDate(item.endDate)}</span>
              <p className="timeline-text">{item.summary}</p>
              <ul className='timeline-text'>
                {item.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skills?.map((item, index) => (
          <li className="skills-item" key={index}>
            <div className="title-wrapper">
              <h5 className="h5">{item.name}</h5>
              <data value={item.percentage}>{item.percentage}%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: `${item.percentage}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </article>
  )
}

export default Resume