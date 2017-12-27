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

      random(){
        const x = Math.floor((Math.random() * 9) + 1);
        return x;
    }
    
      getPlanets() {
        const rand = this.random();
        return axios.get(`https:swapi.co/api/planets/?page=${rand}`)
          .then((response) => {
            console.log(response.data.results)
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
                        console.log(p)
                        return (
                            <div className="Planets-container" key={p.url}>
                                <h1 className="Planets-container-name">{p.name}</h1>
                                <h1 className="Planets-container-height">{p.population}</h1>
                                <PlanetsDetails details={p}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PlanetsList;