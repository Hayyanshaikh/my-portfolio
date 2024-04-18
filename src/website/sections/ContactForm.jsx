import React from "react";
import { Element } from 'react-scroll';
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";

const ContactForm = () => {
	return (
		<>
      {/* Contact */}
      <Element name="contact">
        <section className="Contact">
          <div className="container">
            <div className="contact_wrapper">
  	          <div className="heading_wrapper">
  	            <span className="heading_title">Get In Touch</span>
  	            <h2 className="heading">
  	              Let's Talk For your <span>Next Projects</span>
  	            </h2>
  	            <p>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
                <ul className="contact_list">
                  <li>
                    <Tabler.TbCircleCheckFilled />
                    <p>5+ Years Of Experience</p>
                  </li>
                  <li>
                    <Tabler.TbCircleCheckFilled />
                    <p>Professional Web Designer</p>
                  </li>
                  <li>
                    <Tabler.TbCircleCheckFilled />
                    <p>Mobile Apps Design</p>
                  </li>
                  <li>
                    <Tabler.TbCircleCheckFilled />
                    <p>Custom Design Support</p>
                  </li>
                </ul>
  	          </div>
            	<form className="contact_form">
  						  <div className="input_group">
  						    <label htmlFor="name">Name</label>
  						    <input type="text" id="name" name="name" placeholder="Enter your name" />
  						    <Tabler.TbUser />
  						  </div>
  						  <div className="input_group">
  						    <label htmlFor="email">Email</label>
  						    <input type="email" id="email" name="email" placeholder="Enter your email" />
  						    <Tabler.TbMail />
  						  </div>
  						  <div className="input_group">
  						    <label htmlFor="number">Phone Number</label>
  						    <input type="tel" id="number" name="number" placeholder="Enter your phone number" />
  						    <Tabler.TbPhone />
  						  </div>
  						  <div className="input_group">
  						    <label htmlFor="subject">Subject</label>
  						    <select id="subject" name="subject" placeholder="Select a subject">
  						      <option value="">Select</option>
  						      <option value="general">General Inquiry</option>
  						      <option value="support">Customer Support</option>
  						      <option value="feedback">Feedback</option>
  						    </select>
  						    <Tabler.TbChevronDown />
  						  </div>
  						  <div className="input_group w-100">
  						    <label htmlFor="message">Message</label>
  						    <textarea id="message" name="message" rows="5" placeholder="Enter your message"></textarea>
  						  </div>
  						  <Button type="submit" className="btn sd">
  						    <span>Submit</span>
  						    <Tabler.TbChevronRight />
  						  </Button>
  						</form>
            </div>
          </div>
        </section>
      </Element>	
		</>
	)
}

export default ContactForm