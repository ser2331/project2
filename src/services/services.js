import {Component} from "react";

export default class SwapiService extends Component {
	_apiBase = `https://swapi.dev/api`;

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`)
		}
		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson);
	}

	getPerson = async (id) => {
		const people = await this.getResource(`/people/${id}/`)
		return this._transformPerson(people)
	}

	getAllPlanets = async () => {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}/`)
		return this._transformPlanet(planet)

	}

	getAllStarships = async () => {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship);
	}

	getStarships = async (id) => {
		const starship = await this.getResource(`/starships/${id}/`)
		return this._transformStarship(starship)
	}

	extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/
		return item.url.match(idRegExp)[1]
	}

	_transformPlanet = (planet) => {
		return {
			id: this.extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		}
	}

	_transformPerson = (people) => {

		return {
			id: this.extractId(people),
			birthYear: people.birth_year,
			eyeColor: people.eye_color,
			gender: people.gender,
			name: people.name,
		}
	}

	_transformStarship = (starship) => {
		return {
			id: this.extractId(starship),
			cargoCapacity: starship.cargo_capacity,
			consumables: starship.consumables,
			costInCredits: starship.cost_in_credits,
			created: starship.created,
			crew: starship.crew,
			length: starship.length,
			manufacturer: starship.manufacturer,
			model: starship.model,
			name: starship.name,
			passengers: starship.passengers,
		}
	}
}
