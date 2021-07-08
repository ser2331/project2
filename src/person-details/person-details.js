import React, {Component} from 'react'
import './person-details.css'
import SwapiService from "../services/services";

export default class PersonDetails extends Component {
	swapiService = new SwapiService()
	state = {
		person: null
	}

	componentDidMount() {
		this.updatePerson()
	}

	// componentDidUpdate(prevProps) {
	// 	if (this.props.personId < prevProps.personId) {
	// 		this.updatePerson()
	// 	}
	// }

	updatePerson() {
		const {personId} = this.props
		if (!personId) {
			return
		}
		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({person})
			})
	}


	render() {
		if (!this.state.person) {
			return <span>'selected the person'</span>
		}
		const {name, birthYear, eyeColor, gender, id} = this.state.person
		const Character = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
		return (
			<div className='person-details'>
				<img src={Character}
				     alt='character'/>
				<h2>{name} {this.props.personId} </h2>
				<ul className='property-aria'>
					<li>
						<div className='property'>Gender</div>
						<div className='value'>{gender}</div>
					</li>
					<li>
						<div className='property'>Birth Year</div>
						<div className='value'>{birthYear}</div>
					</li>
					<li>
						<div className='property'>Eye Color</div>
						<div className='value'>{eyeColor}</div>
					</li>
				</ul>
			</div>
		)
	}
}
