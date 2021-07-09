import React, {Component} from 'react'
import './item-person.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Error from "../error-indicator";

export default class ItemPerson extends Component {
	state = {
		hasError: false
	}

	componentDidCatch(error, errorInfo) {
		console.log('componentDidCatch(')
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return (
				<Error/>
			)
		}
		return (
			<div className='item-person'>
				<div className='choice-item'>
					<ItemList
						onItemSelected={this.props.onItemSelected}
						getData={this.props.getData}
						renderItem={({name,birthYear,}) => `${name} (${birthYear})`}
					/>
					<PersonDetails
						personId={this.props.personId}
						getOnData={this.props.getOnData}/>
				</div>
			</div>
		)
	}
}


