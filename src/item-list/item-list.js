import React, {Component} from 'react'
import "./item-list.css"
import SwapiService from "../services/services";
import Spinner from "../spinner";

export default class ItemList extends Component {
	swapiService = new SwapiService()
	state = {
		personList: null
	}

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then((personList) => {
				this.setState({
					personList
				})
			})
	}

	renderItems(arr) {
		return arr.map((personList) => {
			const {id, name} = personList
			return (
				<div>
					<li className='item-li'
					    key={id}
					    onClick={() => this.props.onItemSelected(id)}>
						{name}
					</li>
					<hr/>
				</div>
			)
		})
	}

	render() {
		const {personList} = this.state
		if (!personList) {
			return <Spinner/>
		}
		const items = this.renderItems(personList)
		return (
			<div className='item-list'>
				<ul className='item-ul'>
					{items}
				</ul>
			</div>
		)
	}
}