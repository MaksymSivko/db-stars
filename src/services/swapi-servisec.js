export class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = planet => {
        const { name, population, rotation_period, diameter } = planet;
        return {
            id: this._extractId(planet),
            name: name,
            population: population,
            rotationPeriod: rotation_period,
            diameter: diameter
        };
    };

    _transformStarship = starship => {
        const {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            crew,
            passengers,
            cargo_capacity
        } = starship;

        return {
            id: this._extractId(starship),
            name: name,
            model: model,
            manufacturer: manufacturer,
            costInCredits: cost_in_credits,
            length: length,
            crew: crew,
            passengers: passengers,
            cargoCapacity: cargo_capacity
        };
    };

    _transformPerson = person => {
        const { name, gender, birth_year, eye_color } = person;
        return {
            id: this._extractId(person),
            name: name,
            gender: gender,
            birthYear: birth_year,
            eyeColor: eye_color
        };
    };
}
