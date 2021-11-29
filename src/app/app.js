import React, {Component} from 'react'
import './app.css'
import Header from "../header";
import RandomPlanets from "../random-planets";
import ItemPerson from "../item-person";
import Error from "../error-indicator";
import ErrorButton from "../error-button";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../services/services";

export default class App extends Component {
    swapiService = new SwapiService()
    state = {
        hasError: false,
        selectedPerson: 35,
        selectedPlanet: 32,
        selectedStarships: 13
    }
    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
            // selectedPlanet: id,
            // selectedStarships: id
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
        return (
            <div className='app'>
                <Header/>
                <RandomPlanets/>
                <ErrorButton/>
                <ItemPerson
                    getData={this.swapiService.getAllPeople}
                    getOnData={this.swapiService.getPerson}
                    onItemSelected={this.onItemSelected}
                    personId={this.state.selectedPerson}
                />
                <div className='item-person'>
                    <div className='choice-item'>
                        <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={({name, diameter}) => `${name} (${diameter})`}
                        />
                        <PersonDetails
                            personId={this.state.selectedPlanet}
                            getOnData={this.swapiService.getPlanet}
                        />
                    </div>
                </div>
                <div className='item-person'>
                    <div className='choice-item'>
                        <ItemList
                            onItemSelected={this.onItemSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => item.name}
                        />
                        <PersonDetails
                            personId={this.state.selectedStarships}
                            getOnData={this.swapiService.getStarships}
                        />
                    </div>
                </div>
            </div>
        )
    }
}