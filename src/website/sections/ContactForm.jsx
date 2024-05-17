import React, { useRef } from "react";
import { Element } from 'react-scroll';
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_lid72jm', 'template_f8z5717', form.current, 'bJGcM6yrhSHZoyx7r')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

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
              <form ref={form} className="contact_form" onSubmit={sendEmail}>
                <Input
                  icon={<Tabler.TbUser />}
                  label="Name"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />

                <Input
                  icon={<Tabler.TbMail />}
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />

                <Input
                  icon={<Tabler.TbPhone />}
                  label="Phone Number"
                  id="phoneNumber"
                  name="phone"
                  placeholder="Enter your Phone Number"
                />

                <Input
                  icon={<Tabler.TbChevronDown />}
                  label="Subject"
                  id="subject"
                  name="subject"
                  placeholder="Select a subject"
                />

                <Input
                  label="Message"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-100"
                />
                <Button type="submit" className="btn">
                  <span>Submit</span>
                  <Tabler.TbChevronRight />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Element> 
    </>
  );
}

export default ContactForm;