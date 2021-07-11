import React from 'react'
import './error-indicator.scss'
import Chj from './7Chj.gif'
const Error = () => {
	return (
		<div className='error-area'>
			<img src={Chj} alt='error'/>
			<h2>Error, pleas waite, R-2 D-2 fixes this problem</h2>
		</div>
	)
}
export default Error