import React, {Component} from 'react'
import './person-details.css'
import SwapiService from "../services/services";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class PersonDetails extends Component {
	swapiService = new SwapiService()

	state = {
		person: null
	}

	componentDidMount() {
		this.updatePerson()
	}

	componentDidUpdate(prevProps) {
		const {personId} = this.props
		if (personId !== prevProps.personId) {
			this.updatePerson()
		}
	}

	updatePerson() {
		const {personId, getOnData} = this.props
		if (!personId) {
			return
		}
		console.log(getOnData, personId)
		getOnData(personId).then((person) => {
				this.setState({person})
			})
	}


	render() {
		const {personId} = this.props
		if (!this.state.person) {
			return <Spinner/>
		}
		const {name, birthYear, eyeColor, gender, id} = this.state.person
		const adresUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
		const Character = <img src={adresUrl}
		                       alt='character'/>
		return (
			<div className='person-details'>
				{Character}
				<h2>{name} {personId} </h2>
				<ul className='property-aria'>
					<li>
						<div className='property'>Gender</div>
						<div className='value'>{gender}</div>
					</li>
					<hr/>
					<li>
						<div className='property'>Birth Year</div>
						<div className='value'>{birthYear}</div>
					</li>
					<hr/>
					<li>
						<div className='property'>Eye Color</div>
						<div className='value'>{eyeColor}</div>
					</li>
					<hr/>
				</ul>
				<ErrorButton/>
			</div>
		)
	}
}
