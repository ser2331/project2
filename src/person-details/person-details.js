import React from 'react'
import R2D2 from '../img/R2D2.jpeg'
import './person-details.css'

const PersonDetails = () => {
	return (
		<div className='person-details'>
			<img src={R2D2} alt='R2D2'/>
			<h2>R2-D2</h2>
			<ul className='property-aria'>
				<li>
					<div className='property'>Gender</div>
					<div className='value'>male</div>
				</li>
				<li>
					<div className='property'>Birth Year</div>
					<div className='value'>43</div>
				</li>
				<li>
					<div className='property'>Eye Color</div>
					<div className='value'>red</div>
				</li>
			</ul>
		</div>
	)
}
export default PersonDetails