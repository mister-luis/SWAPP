import React, { Component } from 'react';
import axios from 'axios';
import People from '../People/People'
import './styles/PeopleList.css'
class PeopleList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            people: []
        }

        this.getPeople = this.getPeople.bind(this);
    }

    random() {
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
            <People people={people} />
        )
    }
}

export default PeopleList;