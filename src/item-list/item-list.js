import React, {Component} from 'react'
import "./item-list.css"
import Spinner from "../spinner";

export default class ItemList extends Component {
	state = {
		itemList: null
	}

	componentDidMount() {
		const {getData} = this.props
		getData().then((itemList) => {
			this.setState({
				itemList
			})
		})
	}

	renderItems(arr) {
		return arr.map((item) => {
			const {id} = item
			const label = this.props.renderItem(item)
			return (
				<div key={id}
				     className='item-li'>
					<li
						onClick={() => this.props.onItemSelected(id)}>
						{label}
					</li>
					<hr/>
				</div>
			)
		})
	}

	render() {
		const {itemList} = this.state
		if (!itemList) {
			return <Spinner/>
		}
		const items = this.renderItems(itemList)
		return (
			<div className='item-list'>
				<ul className='item-ul'>
					{items}
				</ul>
			</div>
		)
	}
}