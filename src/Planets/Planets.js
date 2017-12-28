import React, { Component } from "react";
import PlanetsDetails from '../PlanetsDetails/PlanetsDetails';

class Planets extends Component {
    render() {
        return (
            <div className="Planets">
                {
                    this.props.planets.map((p) => {
                        return (
                            <div className="Planets-container" key={p.url}>
                                <img alt="Star Wars img" className="Container-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" />
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

export default Planets;