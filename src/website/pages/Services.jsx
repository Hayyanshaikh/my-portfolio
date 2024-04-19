import React, { useState } from "react";
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
	return (
		<>
      <Banner>our <span>Services</span></Banner>
			
      {/* Services */}
      <section className="services bg">
        <div className="container">
          <div className="heading_wrapper center">
            <span className="heading_title">Popular Services</span>
            <h2 className="heading">
              My <span>Special Service</span> For your Business Development
            </h2>
          </div>
          <div className="services_wrapper">
            <ServiceCard
              count="01."
              title="Brand Identity Design"
              description="Dignissimos ducimus blanditiis praesen"
            />
            <ServiceCard
              count="02."
              title="Web Design & Development"
              description="Craft stunning and functional websites that engage your audience."
            />
            <ServiceCard
              count="03."
              title="Content Marketing"
              description="Create compelling content that attracts, converts, and retains leads."
            />
            <ServiceCard
              count="04."
              title="Search Engine Optimization (SEO)"
              description="Improve your website's visibility and organic traffic through SEO strategies."
            />
            <ServiceCard
              count="05."
              title="Social Media Marketing"
              description="Connect with your audience and grow your brand on social media platforms."
            />
            <ServiceCard
              count="06."
              title="Graphic Design"
              description="Create eye-catching visuals that elevate your brand identity."
            />
          </div>
        </div>
      </section>
		</>
	)
}

export default Services