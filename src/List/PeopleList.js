import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import CharacterDetails from '../CharacterDetails';
import './styles/PeopleList.css'
class PeopleList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        }

        this.getPeople = this.getPeople.bind(this);
    }

    random(){
        const x = Math.floor((Math.random() * 9) + 1);
        return x;
    }

    getPeople() {
        const rand = this.random();
        return axios.get(`https:swapi.co/api/people/?page=${rand}`)
            .then((response) => {
                this.setState({ people: response.data.results })
            }
            )
    }


    componentDidMount() {
        this.getPeople()
    }
    render() {
        const people = this.state.people;
        return (
            <div className="Char">
                {
                    people.map((p) => {
                        return (
                            <div className="Char-container" key={p.url}>
                                <img className="Container-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" />
                                <div className="Container-info">
                                    <div className="Container-name">
                                        <span>Name:</span>
                                        <h1 className="Char-container-name">{p.name}</h1>
                                    </div>
                                    <div className="Container-height">
                                        <span>Height:</span>
                                        <h1 className="Char-container-height">{p.height}</h1>
                                    </div>
                                </div>
                                    <CharacterDetails details={p} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PeopleList;