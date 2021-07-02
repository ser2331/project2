import React from 'react'
import R2D2 from '../img/R2D2.jpeg'
import './person-details.css'
const PersonDetails = () => {
	return (
		<div className='person-details'>
			<img src={R2D2} alt='R2D2' />
			<ul>
				<h2>R2-D2</h2>
				<li>Gender male</li>
				<li>Birth Year 43</li>
				<li>Eye Color red</li>
			</ul>
		</div>
	)
}
export default PersonDetails