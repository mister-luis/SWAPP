import React,{ Component } from "react";
import CharacterDetails from '../CharacterDetails/CharacterDetails';

class People extends Component{
    render(){
        return(
            <div className="Char">
                {
                    this.props.people.map((p) => {
                        return (
                            <div className="Char-container" key={p.url}>
                                <img alt="Star Wars logo" className="Container-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" />
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

export default People;