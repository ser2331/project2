import React from 'react'
import './app.css'
import Header from "../header";
import RandomPlanets from "../random-planets";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = () => {

	return (
		<div className='app'>
			<Header/>
			<RandomPlanets/>
			<ItemList/>
			<PersonDetails/>
		</div>
	)
}
export default App