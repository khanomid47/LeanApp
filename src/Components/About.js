import React, { Component } from 'react';
//import AWSTechU from './AWSTechU.jpg';
import logo from './Logo.jpeg';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+"AWSTechU.jpg";
      var bio = "Everyday restaurants throw out 31 thousand tons of food. Food waste is the most common material in land fills and incarcerators. Therefore, impacting climate change in addition to hurting the profits of restaurants. Lean Kitchen allows resturants to use data analysis to better understand the cause of food waste and help minimize their waste.";
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={logo} alt="AWS Logo" />
         </div>
         <div className="nine columns main-col">
            <h2>About The Project</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Cole Draper: coledrap@amazon.com</span><br />
                           <span>Aaqib Bickaya: bickaaqi@amazon.com</span><br />
                           <span>Omid Khan: khanomi@amazon.com</span>
					   </p>
               </div>
               <div className="columns contact-details">
                  <h2>Mentor Contact Details</h2>
                  <p className="address">
						   <span>Dustin Sell: dustsell@amazon.com</span><br />
                           <span>Kesha Beethe: keshbee@amazon.com</span><br />
                           <span>Todd Pritsky: pritsky@amazon.com</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
