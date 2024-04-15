import React from 'react'
import * as Tabler from "react-icons/tb";
import ProfilePic from '../../assets/images/profile-pic.png'

const Home = () => {
	return (
		<>
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
							<button className="btn">
								<span>hire me</span>
								<Tabler.TbArrowRight/>
							</button>
						</div>
						<figure className="profile_pic">
							<img src={ProfilePic} alt="profile"/>
						</figure>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home;