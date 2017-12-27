import React, { Component } from 'react';
class PlanetsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.openDetails = this.openDetails.bind(this);
        this.closeDetails = this.closeDetails.bind(this);
    }

    openDetails() {
        this.setState({ active: !this.state.active })
    }

    closeDetails() {
        this.setState({ active: !this.state.active })
    }
    render() {

        const info = this.props.details;
        if (!this.state.active) {
            return <button className="btnInfo" onClick={this.openDetails}>Show more..</button>
        }

        return (
            <div className="Details">
                <button className="btnInfo" onClick={this.closeDetails}>X</button>
                <ul className="Details-list">
                    <li><h2>Name : {info.name}</h2></li>
                    <li><h2>Population : {info.population}</h2></li>
                    <li><h2>Diameter : {info.diameter}</h2></li>
                    <li><h2>Climate : {info.climate}</h2></li>
                    <li><h2>Gravity : {info.gravity}</h2></li>
                    {info.films.map(film => <li><h2>Film : {film}</h2></li>)}
                    

                </ul>
            </div>
        )
    }
}

export default PlanetsDetails;