import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import CharacterDetails from '../CharacterDetails';
import './styles/PeopleList.css'
class PeopleList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            next:null,
            previous:null
        }

        this.getPeople = this.getPeople.bind(this);
    }

    random(){
        const x = Math.floor((Math.random() * 9) + 1);
        return x;
    }

    getPeople() {
        const rand = this.random();
        console.log(rand)
        return axios.get(`https:swapi.co/api/people/?page=${rand}`)
            .then((response) => {
                console.log(response.data.results)
                this.setState({ people: response.data.results })
                this.setState({next: response.data.next})
                this.setState({previous: response.data.previous})
            }
            )
    }


    componentDidMount() {
        this.getPeople()
    }
    render() {
        const people = this.state.people;
        const next = this.state.next;
        console.log(people)
        return (
            <div className="Char">
                {
                    people.map((p) => {
                        console.log(p)
                        return (
                            <div className="Char-container" key={p.url}>
                                <h1 className="Char-container-name">{p.name}</h1>
                                <h1 className="Char-container-height">{p.height}</h1>
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