import React, {Component} from 'react'
import './random-planets.css'
import SwapiService from "../services/services";
import Spinner from "../spinner";
import Error from "../error-indicator";


export default class RandomPlanets extends Component {
	SwapiService = new SwapiService()
	state = {
		planet: {},
		loading: true,
		error: false
	}

	constructor() {
		super();
		this.updatePlanet()
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
			error: false
		})
	}
	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		})
	}

	updatePlanet() {
		const id = Math.floor(Math.random() * 25) + 2
		this.SwapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError)
	}


	render() {
		const {loading, planet, error} = this.state
		const hasData = !(loading || error)
		const errorMassage = error ? <Error/> : null
		const spinner = loading ? <Spinner/> : null
		const content = hasData ? <PlanetView planet={planet}/> : null
		return (
			<div className='random-planets'>
				{errorMassage}
				{spinner}
				{content}
			</div>
		)
	}
}

const PlanetView = ({planet}) => {
	const {name, population, rotationPeriod, diameter, id} = planet
	const planetImg = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
	return <React.Fragment>
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
	</React.Fragment>
}