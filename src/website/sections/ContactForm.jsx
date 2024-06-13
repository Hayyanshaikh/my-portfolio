import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_lid72jm",
        "template_f8z5717",
        form.current,
        "bJGcM6yrhSHZoyx7r"
      )
      .then(
        () => {
          setAlert({
            show: true,
            message: "Email sent successfully!",
            type: "success",
          });
          form.current.reset();
          setLoading(false);
          setTimeout(
            () => setAlert({ show: false, message: "", type: "" }),
            5000
          );
        },
        () => {
          setAlert({
            show: true,
            message: "Failed to send email",
            type: "danger",
          });
          setLoading(false);
          setTimeout(
            () => setAlert({ show: false, message: "", type: "" }),
            5000
          );
        }
      );
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
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis
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
                    <p>5+ Years Of Experience</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={5}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Professional Web Designer</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={6}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Mobile Apps Design</p>
                  </motion.li>
                  <motion.li
                    variants={fadeUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={7}
                  >
                    <Tabler.TbCircleCheckFilled />
                    <p>Custom Design Support</p>
                  </motion.li>
                </ul>
              </div>
              <motion.form
                ref={form}
                className="contact_form"
                onSubmit={sendEmail}
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
