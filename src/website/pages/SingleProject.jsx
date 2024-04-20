import React, { useState } from "react";
import Button from "../components/Button.jsx";
import * as Tabler from "react-icons/tb";
import Banner from '../components/Banner.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import { Routes, Route, useParams } from 'react-router-dom';

const SingleProject = () => {
  let { projectId } = useParams();
  useTitle(projectId.replace(/-/g, " "));

  return (
    <>
			<Banner>
				{projectId.replace(/-/g, " ")}
				<p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Id,</p>
			</Banner>

			{/* Overview */}
			<section className="bg">
				<div className="single_product_overview">
					<div className="container">
						<div className="single_product_overview_wrapper">
							<figure className="image_of_project">
								<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt=""/>
							</figure>
							<div className="content_of_project">
								<span className="highlight_text">highlights</span>
								<ul>
								  <li>Responsive design</li>
								  <li>Customizable color schemes</li>
								  <li>Integration with e-commerce platforms</li>
								  <li>Built-in analytics</li>
								  <li>SEO-friendly design</li>
								  <li>Mobile-friendly design</li>
								</ul>
								<hr/>
								<div className="cta">
									<span className="price">$20</span>
									<Button>
										<span>purchase Now</span>
									</Button>
									<Button className="btn outline">
										<span>Live Preview</span>
										<Tabler.TbExternalLink/>
									</Button>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* project detail */}
			<section className="project_detail">
				<div className="container">
					<div className="project detail_wrapper">
						<div className="project_detail_content">
							<div className="filter_buttons">
								<Button className="btn active">
									<span>Product Overview</span>
								</Button>
								<Button>
									<span>Screenshots</span>
								</Button>
								<Button>
									<span>Changelog</span>
								</Button>
							</div>
							<hr/>
							<div className="content">
								<p>StellarWeb is a modern and sleek website template designed for businesses and startups. It features a responsive design that looks great on any device, and customizable color schemes to match your brand. With integration with popular e-commerce platforms like Shopify and WooCommerce, StellarWeb makes it easy to set up an online store and start selling your products. Customizable contact forms and newsletter sign-ups allow you to engage with your customers and build your email list. And with built-in analytics, you can track your website’s performance and make data-driven decisions to improve your online presence. </p>
							<h4>Stunning Features</h4>
							<ul>
							  <li>Responsive design</li>
							  <li>Customizable color schemes</li>
							  <li>Integration with e-commerce platforms</li>
							  <li>Built-in analytics</li>
							  <li>SEO-friendly design</li>
							  <li>Mobile-friendly design</li>
							</ul>
							<p>StellarWeb’s SEO-friendly design ensures that your website ranks higher in search engines, while its customizable navigation menus and mobile-friendly design make it easy for users to navigate your website on any device. Additionally, StellarWeb offers social media integration to help you connect with your audience on various platforms, and customizable footer widgets to add additional content and information to your website.</p>
							</div>
						</div>
						<div className="small_overview">
							<figure className="image_of_project">
								<img src="https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg" alt="" />
							</figure>
							<div className="small_overview_content">
								<div className="small_overview_content_head">
									<h4>modern title</h4>
									<p className="price">$20</p>
								</div>
								<Button>
									<span>purchase Now</span>
								</Button>
								<Button className="btn outline">
									<span>Live Preview</span>
									<Tabler.TbExternalLink/>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}

export default SingleProject;