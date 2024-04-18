import React from 'react'

const Banner = ({children}) => {
	return (
		<section className="banner">
			<div className="container">
        <div className="heading_wrapper center">
          <h2 className="heading">
            {children}
          </h2>
        </div>
			</div>
		</section>
	)
}

export default Banner