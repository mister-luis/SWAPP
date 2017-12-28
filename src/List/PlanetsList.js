import React, { Component } from 'react';
import axios from 'axios';
import PlanetsDetails from '../PlanetsDetails';
import './styles/PlanetsList.css'
class PlanetsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            planets: []
        }

        this.getPlanets = this.getPlanets.bind(this);
    }

    random() {
        const x = Math.floor((Math.random() * 7) + 1);
        return x;
    }

    getPlanets() {
        const rand = this.random();
        return axios.get(`https:swapi.co/api/planets/?page=${rand}`)
            .then((response) => {
                this.setState({ planets: response.data.results })
            }
            )
    }



    componentDidMount() {
        this.getPlanets()
    }
    render() {
        const planets = this.state.planets;
        return (
            <div className="Planets">
                {
                    planets.map((p) => {
                        return (
                            <div className="Planets-container" key={p.url}>
                                <img className="Container-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" />
                                <div className="Container-info">
                                    <div className="Container-name">
                                        <span>Name:</span>
                                        <h1 className="Planets-container-name">{p.name}</h1>
                                    </div>
                                    <div className="Container-population">
                                        <span>Population:</span>
                                        <h1 className="Planets-container-population">{p.population}</h1>
                                    </div>
                                </div>
                                    <PlanetsDetails details={p} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PlanetsList;