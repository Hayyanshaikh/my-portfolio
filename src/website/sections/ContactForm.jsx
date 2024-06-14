import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import * as Tabler from "react-icons/tb";
import Input from "../components/Input.jsx";
import Alert from "../components/Alert.jsx";
import Button from "../components/Button.jsx";
import { motion } from "framer-motion";
import { fadeUpVariant } from "../../animation/FramerAnimation.jsx";

const ContactForm = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form.current)).toString(),
    })
      .then(() => {
        setAlert({
          show: true,
          message: "Form submitted successfully!",
          type: "success",
        });
        form.current.reset();
        setLoading(false);
        setTimeout(() => setAlert({ show: false, message: "", type: "" }), 5000);
      })
      .catch(() => {
        setAlert({
          show: true,
          message: "Failed to submit form",
          type: "danger",
        });
        setLoading(false);
        setTimeout(() => setAlert({ show: false, message: "", type: "" }), 5000);
      });
  };


  return (
    <>
      <Element name="contact">
        <section className="Contact">
          <div className="container">
            <div className="contact_wrapper">
              <div className="heading_wrapper">
                <motion.span
                  className="heading_title"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={1}
                >
                  Get In Touch
                </motion.span>
                <motion.h2
                  className="heading"
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={2}
                >
                  Let's Talk For your <span>Next Projects</span>
                </motion.h2>
                <motion.p
                  variants={fadeUpVariant}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={3}
                >
                  Let's get in touch! With over 2 years of experience, I specialize in web development, problem-solving, and custom solutions.
                </motion.p>
                <ul className="contact_list">
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={4}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>2+ Years Of Experience</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Professional Web Developer</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Problem Solving</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={7}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Custom Development</p>
                  </motion.li>
                </ul>
              </div>
              <motion.form
                ref={form}
                className="contact_form"
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                variants={fadeUpVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={3}
              >
                <Alert
                  message={alert.message}
                  type={alert.type}
                  show={alert.show}
                />
                <input type="hidden" name="form-name" value="contact" />
                <Input
                  icon={<Tabler.TbUser />}
                  label="Name"
                  id="name"
                  required={true}
                  name="name"
                  placeholder="Enter your name"
                />

                <Input
                  icon={<Tabler.TbMail />}
                  label="Email"
                  id="email"
                  required={true}
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
                <Button type="submit" className="btn" disabled={loading}>
                  <span>{loading ? "loading..." : "Submit"}</span>
                  <Tabler.TbChevronRight />
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default ContactForm;