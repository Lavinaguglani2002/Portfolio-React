import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './About.css'; // Import your CSS file for styling
import about from './about.jpg'; // Import your profile picture
import Footer from '../Home/Footer/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
      <div className="profile-pic-container">
            <img className="about" src={about} alt="about" />
          </div>

        <div className="about-heading-container">
          <h1 className="about-heading">Hello I'm <strong style={{"color":'lightblue'}}>Lavina</strong>.</h1>
        </div>
        <div className="about-content">
          <div className="text-container">
            <p>
              I am currently pursuing my Bachelors in Computer Science & Engineering from Giani Zail Singh Campus College of Engineering and Technology, Maharaja Ranjit Singh Punjab Technical University, Bathinda<strong style={{"color":'lightblue'}}>(2k21-2k25)</strong>.
            </p>
            <p>
              I am passionate about exploring different web technologies and enhancing my skills by building projects. I'm currently learning Python, a programming language. I'm excited about exploring its possibilities in software development and data analysis.
            </p>

<p>I have worked as <strong style={{"color":"lightblue"}}>Web Development intern at Potencia Academy for 2 months</strong>(from April 2023-July 2023) and learnt a lot of practical knowledge about the tech industry.</p>
<p>
              Currently
              , I am seeking an internship opportunity in the field of Web Development to further refine my skills and gain practical experience in real-world projects.
            </p>
            <p>My main Aim is to become a Successful Person.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Aboutus;
