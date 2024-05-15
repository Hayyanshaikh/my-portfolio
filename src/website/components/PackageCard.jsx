import React from 'react'
import Button from './Button.jsx';
import * as Tabler from "react-icons/tb";

const PackageCard = ({ tier, discountRate, price, desc, features, ...restProps }) => {
	return (
		<div className="package_card" {...restProps}>
			<div className="package_header">
				<span className="package_tier">{tier} Plan</span>
				<p className="package_discount_rate">Try Out {tier} Save <span>{discountRate}</span></p>
				<div className="package_price">
					<span>Rs. {parseInt(price).toFixed(2)}</span>
					<sub>/per month</sub>
				</div>
			</div>
			<div className="package_body">
				<p className="package_desc">{desc}</p>
				<ul className="package_features">
					{features.map((feature, index) => (
						<li key={index} className={feature.value ? "" : "disabled"}>
							{
								feature.value ? <Tabler.TbCheck/> : <Tabler.TbX/>
							}
							<p className="package_features_text">{feature.label}</p>
						</li>
					))}
				</ul>
				<Button>
					<span>Choose Package</span>
					<Tabler.TbChevronRight/>
				</Button>
			</div>
		</div>
	)
}

export default PackageCard