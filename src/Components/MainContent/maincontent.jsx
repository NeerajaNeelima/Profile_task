import React, { useEffect, useState } from 'react';
import  About  from '../About/about';
import Resume from '../Resume/resume';
import Blog from '../Blog/blog';
import  Portfolio  from '../Portfolio/portfolio';
import Contact from '../Contact/contact';
const Maincontent = ({userData}) => {
  const [activePage, setActivePage] = useState('About');
  const [loading, setLoading] = useState(true);
  const [showNetworkMessage, setShowNetworkMessage] = useState(false);
  const handleNavLinkClick = (page) => {
    setActivePage(page);
  };

  useEffect(()=>{
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setShowNetworkMessage(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  },[userData]);

//Render Loading component when userData is null
  if (!userData && loading) {
    return (
      <><div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
        
      </div>
      <div style={{color:'white',left:'45%', position:'absolute'}}>Fetching user Portfolio.........</div>
     
      </>
    );
  }
  if (showNetworkMessage) {
    return (
      <div>
        Please check your network connection.
      </div>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <About userData={userData} />;
      case 'Resume':
        return <Resume userData={userData} />;
      case 'Portfolio':
        return <Portfolio userData={userData} />;
      case 'Blog':
        return <Blog userData={userData} />;
      case 'Contact':
        return <Contact userData={userData} />;
      default:
        return <About userData={userData} />;
    }
  };
  
  return (
   <div className='main-content'>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <button
              className={`navbar-link ${activePage === 'About' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('About')}
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activePage === 'Resume' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('Resume')}
            >
              Resume
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activePage === 'Portfolio' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('Portfolio')}
            >
              Portfolio
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activePage === 'Blog' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('Blog')}
            >
              Blog
            </button>
          </li>
          <li className="navbar-item">
            <button
              className={`navbar-link ${activePage === 'Contact' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('Contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
     <div className="page-content">{renderPage()}</div>
  
  </div>
  
  );
};

export default Maincontent;




