import React, {Component} from 'react'
import './app.scss'
import Header from "../header";
import RandomPlanets from "../random-planets";
import Error from "../error-indicator";
import ErrorButton from "../error-button";
import SwapiService from "../services/services";
import Row from "../row";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import ItemList from "../item-list";
import ItemPerson from "../item-person";

export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        hasError: false,
        selectedPerson: 35,
    }
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        })
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
        const {getPerson, getStarships, getPersonImage, getStarshipsImage} = this.swapiService
        const personDetails = (
            <ItemDetails itemId={11}
                         getData={getPerson}
                         getImageUrl={getPersonImage}>
                <Record field='eyeColor' label='Eye Color'/>
                <Record field='birthYear' label='BirthYear'/>
                <Record field='gender' label='Gender'/>
            </ItemDetails>
        )
        const starshipsDetails = (
            <ItemDetails itemId={5}
                         getData={getStarships}
                         getImageUrl={getStarshipsImage}>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        )

        return (
            <div className='app'>
                <Header/>
                {/*<RandomPlanets/>*/}
                {/*<ErrorButton/>*/}
                <ItemPerson
                getData={this.swapiService.getAllPeople}
                />
                <Row left={personDetails} right={starshipsDetails}/>
            </div>
        )
    }
}
