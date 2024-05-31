import React from 'react';
import tibsprocurelogo from '../tibs-procure-logo.jpg';
import { Page, Header, AppTitle, MenuItem, Menu, ButtonContainer, Button, WelcomeContainer, LogoContainer, AboutContainer, TestContainer, BlackCard, EProcurementContainer, EProcureSubTitle} from './landing.styling';

function LandingPage() {
  return (
    <Page > 
      <Header>       
            <AppTitle>TIBS Procure</AppTitle>            
              <Menu >
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">About us</MenuItem>
                <MenuItem href="#">Services</MenuItem>
                <MenuItem href="#">Contact</MenuItem>            
              </Menu>
              <ButtonContainer>
                <Button href="#">Login</Button>
                <Button href="#">Sign Up</Button>    
            </ButtonContainer>
      </Header>

      <WelcomeContainer>    
        <h2>Welcome to Tibs Procure</h2>
        <p>Your one-stop destination for all procurement needs.</p>
            
        <div className="newsletter">
          <form>
             <input type="eTenders" name="eTenders" id="tender" placeholder="Search for eTenders" />
             <input type="submit" name="submit" value="Let's Start" />
          </form>
        </div>
      </WelcomeContainer>        

      <TestContainer>
        <LogoContainer src={tibsprocurelogo}/>
        <AboutContainer className="main">                           
            <div className="about-text">

             <h2>About Us</h2>
             <h3>Tshinwelo Innovative Business Solutions</h3>
             <p>Established in 2015, Tshinwelo Innovative Business Solutions (TIBS) is a 100% black owned company focused on organisational high performance through its Advisory and Digital business transformation offerings.

                Our background and experiences in Business strategy advisory, Supply chain management, Business process management and Human capital management has positioned us to offer pragmatic, innovative, implementable and sustainable solutions that fuse together traditional business approaches and methodologies with digital enabling technologies to allow organisations to reach high levels of performance.
                
                TIBS currently has a team of professionals with 50 years of combined experience dedicated to making sure your business needs are met.</p>
              <button type="button">Learn More</button>
             </div>
        </AboutContainer> 
      </TestContainer>

        <EProcureSubTitle>eProcurement</EProcureSubTitle>
      
          <EProcurementContainer>          
              <BlackCard>
              <i className="fa-solid fa-business-time"></i>
                  
                  <h5>Running Auctions</h5>
                  
                      <p>These are our current running auctions</p>
                      
                      <p style={{ textAlign: 'center' }}>
                          <a className="button" href="#">Show More</a>
                      </p>                
              </BlackCard>
              <BlackCard>
              <i className="fa-light fa-handshake"></i>
            <h5>Running eTenders</h5>
            
              <p>These are our current running tenders</p>
              <p style={{ textAlign: 'center' }}>
                 <a className="button" href="#">Show More</a>
              </p>
              </BlackCard>
              <BlackCard>
              <i className="fa-regular fa-bell"></i>
         <h5>Auction Winners</h5>
         
            <p>These are our auction winners </p>
            <p style={{ textAlign: 'center' }}>
                <a className="button" href="#">Show More</a>
            </p>
              </BlackCard>
          </EProcurementContainer>                  
  </Page>
  );

}

export default LandingPage;