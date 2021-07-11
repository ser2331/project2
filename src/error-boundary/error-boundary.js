import React, {Component} from 'react'
import './error-boundary.scss'
import Error from "../error-indicator";

export default class ErrorBoundary extends Component {
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
            this.props.children
        )
    }
}
