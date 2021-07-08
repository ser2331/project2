import React, {Component} from 'react'
import './app.css'
import Header from "../header";
import RandomPlanets from "../random-planets";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component {
	state = {
		selectedPerson:48
	}
	onItemSelected = (id) => {
		debugger
		this.setState({
			selectedPerson:id
		})
	}

	render() {

		return (
			<div className='app'>
				<Header/>
				<RandomPlanets/>
				<div className='choice-item'>
					<ItemList onItemSelected={this.onItemSelected}/>
					<PersonDetails personId={this.state.selectedPerson}/>
				</div>
			</div>
		)
	}
}
