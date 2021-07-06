import {Component} from "react";

export default class SwapiService extends Component {
	_apiBase = `https://swapi.dev/api`;

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`)
		}
		return await res.json();
	};

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results.map(this._transformPerson());
	}

	async getPerson(id) {
		const people = await this.getResource(`/people/${id}/`)
		return this._transformPerson(people)
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results.map(this._transformPlanet());
	}

	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}/`)
		return this._transformPlanet(planet)

	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results.map(this._transformStarship());
	}

	async getStarships(id) {
		const starship= await this.getResource(`/starships/${id}/`)
		return this._transformStarship(starship)
	}

	extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/
		return item.url.match(idRegExp)[1]
	}

	_transformPlanet(planet) {
		return {
			id: this.extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		}
	}

	_transformPerson(people) {
		return {
			id: this.extractId(people),
			birthYear: people.birth_year,
			eyeColor: people.eye_color,
			films: people.films,
			gender: people.gender,
			hairColor: people.hair_color,
			height: people.height,
			mass: people.mass,
			name: people.mass,
			skinColor: people.skin_color,
		}
	}

	_transformStarship(starship) {
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
