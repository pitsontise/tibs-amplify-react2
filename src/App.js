import React from 'react';
import logo from './logo.svg';
import tibsprocurebackground from './tibs-procure-background.jpg';
import tibsprocurelogo from './tibs-procure-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="main layout"> 
      <div className="hero">
        <nav>
            <h2 className="logo">Tibs Procure</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" className="btn">Login</a>
            <a href="#" className="btn">Sign Up</a>
        </nav>
      </div>

      <div className="content">    
        <h2>Welcome to Tibs Procure</h2>
        <p>Your one-stop destination for all procurement needs.</p>
            
        <div className="newsletter">
          <form>
             <input type="eTenders" name="eTenders" id="tender" placeholder="Search for eTenders" />
             <input type="submit" name="submit" value="Let's Start" />
          </form>
        </div>
      </div>        

      <section className="about">
        <div className="main">     
            <img src="tibsprocurebackground" />            
            <div className="about-text">

             <h2>About Us</h2>
             <h3>Tshinwelo Innovative Business Solutions</h3>
             <p>Established in 2015, Tshinwelo Innovative Business Solutions (Tibs) is a 100% black owned company focused on organisational high performance through its Advisory and Digital business transformation offerings.

                Our background and experiences in Business strategy advisory, Supply chain management, Business process management and Human capital management has positioned us to offer pragmatic, innovative, implementable and sustainable solutions that fuse together traditional business approaches and methodologies with digital enabling technologies to allow organisations to reach high levels of performance.
                
                Tibs currently has a team of professionals with 50 years of combined experience dedicated to making sure your business needs are met.</p>
              <button type="button">Learn More</button>
             </div>
        </div> 
      </section>

      <div className="procure">
        <div className="title">
            <h2>eProcurement</h2>
        </div>

        <div className="box">
            <div className="card">
                <i className="fa-solid fa-business-time"></i>
                  
                <h5>Running Auctions</h5>
                <div className="pra">
                    <p>These are our current running auctions</p>
                    
                    <p style="text-align: center;">
                        <a className="button" href="#">Show More</a>
                    </p>
                </div>
            </div>
      </div>
      <div className="card">
        <i className="fa-light fa-handshake"></i>
            <h5>Running eTenders</h5>
            <div className="pra">
              <p>These are our current running tenders</p>
              <p style="text-align: center;">
                 <a className="button" href="#">Show More</a>
              </p>
            </div>
       </div>

      <div className="card">
         <i className="fa-regular fa-bell"></i>
         <h5>Auction Winners</h5>
         <div className="pra">
            <p>These are our auction winners </p>
            <p style="text-align: center;">
                <a className="button" href="#">Show More</a>
            </p>
         </div>
      </div>
      
     </div>
  </div>
  );

}

export default App;