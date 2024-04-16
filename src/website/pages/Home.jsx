import React from 'react'
import * as Tabler from "react-icons/tb";
import ProfilePic from '../../assets/images/profile-pic.png'

const Home = () => {
	return (
		<>
			{/* hero section*/}
			<section className="hero">
				<div className="container">
					<div className="hero_main">
						<div className="hero_content">
							<h1 className="hero_heading">
								<span>Hello, i'm</span>
								<strong>Hayyan ali</strong>
								<p>Web Developer</p>
							</h1>
							<p>We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
							<div className="buttons_gourp">
								<button className="btn">
									<span>hire me</span>
									<Tabler.TbArrowRight/>
								</button>
								<button className="text_btn">
									<span>Download Resume</span>
									<Tabler.TbChevronRight/>
								</button>
							</div>
						</div>
						<div className="work_counter">
							<div className="work_count">
								<span className="count">2Y+</span>
								<p className="work_text">Years Of Experience</p>
							</div>
							<div className="work_count">
								<span className="count">48+</span>
								<p className="work_text">Project Complete</p>
							</div>
							<div className="work_count">
								<span className="count">76%</span>
								<p className="work_text">Client Satisfactions</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About me */}
			<section className="about_me bg">
				<div className="container">
					<div className="about_me_wrapper">
						<div className="about_me_content">
							<div className="heading_wrapper">
								<span className="heading_title">About me</span>
								<h2 className="heading">Professional <span>Problem Solutions</span> For Digital Products</h2>
							</div>
							<p className="about_me_text">At vero eos et accusamus etodio dignissimos ducimus praesentium voluptatum corrupti quos dolores quas molestias excepturi sint occaecati cupiditate provident qui officia deserunt mollitia animi, id est laborum et dolorum</p>
							<div className="about_me_top_skills">
						    <div className="about_skill">
						        <Tabler.TbCheck/>
						        <span>Branding &amp; Design</span>
						    </div>
						    <div className="about_skill">
						        <Tabler.TbCheck/>
						        <span>Web Development</span>
						    </div>
						    <div className="about_skill">
						        <Tabler.TbCheck/>
						        <span>Digital Marketing</span>
						    </div>
						    <div className="about_skill">
						        <Tabler.TbCheck/>
						        <span>Product Design</span>
						    </div>
							</div>
							<div className="about_me_contact">
								<div className="about_contact">
									<Tabler.TbMail/>
									<div className="about_contact_content">
										<span className="contact_slogan">Email</span>
										<p className="contact_text">hayyanshaikh@gmail.com</p>
									</div>
								</div>
								<div className="about_contact">
									<Tabler.TbPhone/>
									<div className="about_contact_content">
										<span className="contact_slogan">Phone</span>
										<p className="contact_text">03172271459</p>
									</div>
								</div>
							</div>
						</div>
						<div className="about_me_img"></div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="services">
				<div className="container">
					<div className="heading_wrapper center">
						<span className="heading_title">Popular Services</span>
						<h2 className="heading">My <span>Special Service</span> For your Business Development</h2>
					</div>
					<div className="services_wrapper">
  <div className="service_card">
    <div className="service_count">01.</div>
    <div className="service_content">
      <h4 className="service_title">Brand Identity Design</h4>
      <p className="service_description">Dignissimos ducimus blanditiis praesen</p>
    </div>
    <Tabler.TbArrowUpRight />
  </div>

  <div className="service_card">
    <div className="service_count">02.</div>
    <div className="service_content">
      <h4 className="service_title">Web Design & Development</h4>
      <p className="service_description">Craft stunning and functional websites that engage your audience.</p>
    </div>
    <Tabler.TbArrowUpRight />
  </div>

  <div className="service_card">
    <div className="service_count">03.</div>
    <div className="service_content">
      <h4 className="service_title">Content Marketing</h4>
      <p className="service_description">Create compelling content that attracts, converts, and retains leads.</p>
    </div>
    <Tabler.TbArrowUpRight />
  </div>

  <div className="service_card">
    <div className="service_count">04.</div>
    <div className="service_content">
      <h4 className="service_title">Search Engine Optimization (SEO)</h4>
      <p className="service_description">Improve your website's visibility and organic traffic through SEO strategies.</p>
    </div>
    <Tabler.TbArrowUpRight />
  </div>

  <div className="service_card">
    <div className="service_count">05.</div>
    <div className="service_content">
      <h4 className="service_title">Social Media Marketing</h4>
      <p className="service_description">Connect with your audience and grow your brand on social media platforms.</p>
    </div>
    <Tabler.TbArrowUpRight />
  </div>
  <div className="service_card">
  <div className="service_count">06.</div>
  <div className="service_content">
    <h4 className="service_title">Graphic Design</h4>
    <p className="service_description">Create eye-catching visuals that elevate your brand identity.</p>
  </div>
  <Tabler.TbArrowUpRight />
</div>

</div>

				</div>
			</section>
		</>
	)
}

export default Home;