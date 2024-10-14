import React, { useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faMobile,faCalendarDay,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin  } from "react-icons/ai";
const Sidebar = ({userData}) => {

    console.log("User Data ==>",userData)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Render nothing if userData is null
  if (!userData) {
    return null;
  }
  const {social_handles} = userData.user;

  const iconMap = {
    Facebook: BsFacebook,
    Twitter: AiOutlineTwitter,
    Instagram: AiOutlineInstagram,
    LinkedIn: AiOutlineLinkedin 
  };


  return (
    <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`} data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src={userData.user.about.avatar} alt="Richard hanrick" style={{width:"80"}} />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">{userData.user.about.name}</h1>

          <p className="title">{userData.user.about.title}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffdb70" }} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="neerajanaru023@gmail.com" class="contact-link">{userData.user.email}</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
            <FontAwesomeIcon icon={faMobile} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+19 9346571625" class="contact-link">{userData.user.about.phoneNumber}</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
            <FontAwesomeIcon icon={faCalendarDay} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time datetime="1982-06-23">March 23, 2003</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
            <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{userData.user.about.address}</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

        {social_handles.map((handle, index) => {
        const IconComponent = iconMap[handle.platform]; // Get the corresponding icon component

        return (
          <li className="social-item" key={index}>
            <a href={handle.url} className="social-link">
              <IconComponent style={{ color: "#8a8a8a" }} />
            </a>
          </li>
        );
      })}

        </ul>

      </div>

    </aside>

  )
}

export default Sidebar