import React, { useState } from "react";
import * as Tabler from "react-icons/tb";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import PackageCard from "../components/PackageCard.jsx";

const Packages = () => {
	return (
		<>
      <Banner>All <span>Packages</span></Banner>
			
      {/* Packages */}
      <section className="packages bg">
        <div className="container">
          <div className="heading_wrapper center">
            <span className="heading_title">Pricing Package</span>
            <h2 className="heading">
              Amazing <span>Pricing</span> For your Projects
            </h2>
          </div>
          <div className="packages_wrapper">
            <PackageCard
              tier="Basic Plan"
              price="$19.95"
              discountRate="20%"
              desc="Ideal for beginners"
              features={[
                { name: "Responsive Website Design", included: true },
                { name: "Basic SEO Optimization", included: true },
                { name: "Contact Form Integration", included: true },
                { name: "Mobile Optimization", included: false },
                { name: "Social Media Integration", included: false },
                { name: "Basic Analytics", included: false },
              ]}
            />
            <PackageCard
              tier="Standard Plan"
              price="$39.95"
              discountRate="15%"
              desc="Perfect for small businesses"
              features={[
                { name: "Responsive Website Design", included: true },
                { name: "Advanced SEO Optimization", included: true },
                { name: "E-commerce Integration", included: true },
                { name: "Mobile Optimization", included: true },
                { name: "Social Media Integration", included: false },
                { name: "Basic Analytics", included: false },
              ]}
            />
            <PackageCard
              tier="Premium Plan"
              price="$59.95"
              discountRate="10%"
              desc="Best for established businesses"
              features={[
                { name: "Custom Website Design", included: true },
                { name: "Full SEO Audit and Strategy", included: true },
                { name: "Advanced E-commerce Solutions", included: true },
                { name: "Mobile Optimization", included: true },
                { name: "Social Media Integration", included: true },
                { name: "Advanced Analytics", included: true },
              ]}
            />
          </div>
        </div>
      </section>
		</>
	)
}

export default Packages