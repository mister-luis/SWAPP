import React, { Component } from 'react';
import './styles/Details.css'
class CharacterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }

        this.openDetails = this.openDetails.bind(this);
        // this.closeDetails = this.closeDetails.bind(this);
    }

    openDetails() {
        this.setState({ active: !this.state.active })
    }

    render() {

        const info = this.props.details;
        if (!this.state.active) {
            return <button className="btnInfo" onClick={this.openDetails}>Show more..</button>
        }

        return (
            <div className="Details">
                <button className="btnInfo" onClick={this.openDetails}>X</button>
                <ul className="Details-list">
                    <li><h2>Name : {info.name}</h2></li>
                    <li><h2>Height : {info.height}</h2></li>
                    <li><h2>Gender : {info.gender}</h2></li>
                    <li><h2>Birth year : {info.birth_year}</h2></li>
                    <li><h2>Hair color : {info.hair_color}</h2></li>
                    <li><h2>Skin color : {info.skin_color}</h2></li>
                    <li><h2>Homeworld : {info.homeworld}</h2></li>
                    {info.films.map(film => <li><h2>Film : {film}</h2></li>)}
                    

                </ul>
            </div>
        )
    }
}

export default CharacterDetails;