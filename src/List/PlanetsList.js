import React, { Component } from 'react';
import axios from 'axios';
import Planets from '../Planets/Planets'
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
            <Planets planets={planets} />
        )
    }
}

export default PlanetsList;