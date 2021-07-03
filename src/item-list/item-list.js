import  React from 'react'
import "./item-list.css"
const ItemList=()=>{
	return(
		<div className='item-list'>
			<ul className='item-ul'>
				<li>Luke Skywalker</li>
				<hr/>
				<li>Darth Vader</li>
				<hr/>
				<li>R-2 D-2</li>
			</ul>
		</div>
	)
}
export default ItemList