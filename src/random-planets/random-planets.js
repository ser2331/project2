import React, {Component} from 'react'
import './random-planets.css'
import SwapiService from "../services/services";


export default class RandomPlanets extends Component {
	SwapiService = new SwapiService()
	state = {
		planet: {}
	}

	constructor() {
		super();
		this.updatePlanet()
	}

	onPlanetLoaded = (planet) => {
		this.setState({planet})
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 2
		this.SwapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
	}

	render() {
		const {planet: {name, population, rotationPeriod, diameter, id}} = this.state
		const planetImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
		return (
			<div className='random-planets'>
				<img src={planetImg} alt='Planet'/>
				<h2>{name}</h2>
				<ul className='term-area'>
						<li>
							<div className='term'>Population</div>
							<div className='value'>{population}</div>
						</li>
						<li>
							<div className='term'>Rotation period</div>
							<div className='value'>{rotationPeriod}</div>
						</li>
						<li>
							<div className='term'>Diameter</div>
							<div className='value'>{diameter}</div>
						</li>
				</ul>
			</div>
		)
	}


}