// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/SideBar/sidebar';
import Maincontent from './Components/MainContent/maincontent';
import wedDesign  from './images/web design.jpg'
import webDevelopment from './images/app development.jpg'
import UIUX from "./images/UIUX design2.jpg"
import wordPress from './images/wordpress.jpg'
import movie from './images/movie.jpg'
import gallery from './images/gallery.png'
import whiteboard from './images/whiteboard.avif'
import avatar1 from './images/avatar-1.png'
import avatar2 from './images/avatar-4.png'
import profile_pic from './images/resume_pic.jpg'
function App() {
  //const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
  //       const data = await response.json();
  //       setUserData(data);
  //       await console.log(data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const userData = {
    user: {
      about: {
        name: "Naru Neeraja",
        title: "Full Stack Developer",
        subTitle: "Passionate about building scalable web applications and engaging user experiences.",
        description: "I am a dedicated Full Stack Developer with over 1 years of experience in building dynamic and responsive websites. I specialize in JavaScript, React, Node.js, and have a keen eye for design and user experience.",
        avatar: profile_pic,
        phoneNumber: "+91 9346571625",
        address: "Amadalavalasa, Srikakulam, Andhra Pradesh",
      },
      email: "neerajanaru023@gmail.com",
      social_handles: [
        { platform: "Facebook", url: "https://www.facebook.com/neeraja.neelima.96/" },
        { platform: "Twitter", url: "https://x.com/NaruNeeraj1002" },
        { platform: "Instagram", url: "https://www.instagram.com/023neeraja/" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/naru-neeraja-940850227/d" }
      ],
      testimonials: [
        {
          image: avatar1,
          name: "Parikshit Ghosh",
          review: "Naru was instrumental in developing our company's website. Her attention to detail and dedication are unparalleled."
        },
        {
          image: avatar2,
          name: "Santhosh",
          review: "Working with Naru was a fantastic experience. She delivered high-quality work on time and exceeded our expectations."
        },
        
      ],
      services: [
        {
          name: "Web Design",
          image: wedDesign  
        },
        {
          name: "App Development",
          image: webDevelopment 
        },
        {
          name: "UI/UX Solutions",
          image: UIUX  
        },
        
        {
          name: "Wordpress Development",
          image:  wordPress 
        },
        
      ],
      timeline: [
        {
          jobTitle: "Software Enginner",
          company_name: "CGB ORG",
          startDate: "2021-02-02",
          endDate: "2024-08-31",
          summary: "Junior Software developer to create scalable web applications.",
          bulletPoints: [
            "Developed and maintained company website using React and Node.js.",
            "Implemented responsive design to enhance user experience.",
            "Collaborated with cross-functional teams to define project requirements."
          ]
        },
        {
          jobTitle: "Frontend Developer Intern",
          company_name: "SIMMI Foundation",
          startDate: "2023-05-01",
          endDate: "2023-07-31",
          summary: "Frontend developer developing client projects and maintaining existing applications.",
          bulletPoints: [
            "Contributed to the development of e-commerce platforms.",
            "Fixed bugs and optimized performance of web applications.",
            "Participated in code reviews and team meetings."
          ]
        },
        
      ],
      skills: [
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "Java", percentage: 80 },
        { name: "C++", percentage: 80 },
        { name: "Machine Learning", percentage: 80 },
        { name: "UI/UX Design", percentage: 55 },
        { name: "Git", percentage: 80 },
       
      ],
      blog: [

        {
          image:whiteboard,
          title: "White Board App",
          date: "2023-07-15",
          excerpt: "An in-depth look at strategies for building scalable and maintainable web applications.",
          description:"Whiteboard with Conferene functionalities, image download, can you number of user in the conference."
        },
        {
          image:movie,
          title: "Movie Recommendation App",
          date: "2023-08-15",
          excerpt: "An in-depth look at strategies for building scalable and maintainable web applications.",
          description:"Movie Recommendation based on user interest"
        },
        {
          image:gallery,
          title: "Gallery App",
          date: "2023-09-10",
          excerpt: "Exploring the best practices in React design to enhance user engagement.",
          description:"simple Gallery app"
          
        },
        
      ]
    }
  };


  return (
   <main>
     <Sidebar userData={userData} />
      <Maincontent userData={userData} />
    
  </main>
 
  );
}

export default App;
