import React, {Component} from 'react'
import './error-button.scss'
export default class ErrorButton extends Component{
	state={
		renderError:false
	}
	render() {
		if(this.state.renderError){
			this.foo.bar=0
		}
		return (
			<button type='button'
			        className='error-button'
			        onClick={()=>this.setState({renderError:true})}
			>
				Throw error
			</button>
		)
	}
}
