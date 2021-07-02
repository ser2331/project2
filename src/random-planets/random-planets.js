import React from 'react'
import './random-planets.css'
import planet from '../img/planet1.jpeg'
const RandomPlanets=()=>{
	return(
		<div className='random-planets'>
			<img src={planet} alt='Planet'/>
			<ul>
				<h2>Planet Name</h2>
				<li>Population</li>
				<li>Rotation period</li>
				<li>Diameter</li>
			</ul>
		</div>
	)
}
export default RandomPlanets