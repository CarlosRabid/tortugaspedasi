import React, { Component } from 'react';

class NestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggCount: "",
            laytime: "",
            rehomed: ""
        }
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    render() {
        return <>
            <div className="popUp">
                <div className="new-nest-grid">
                    <span className="new-nest-1"> Number of eggs: </span>
                    <input className="searchInput underline new-nest-2"
                        name="eggCount" onChange={this.handleInput}></input>

                </div>
                <div className="new-nest-grid">
                    <span className="new-nest-1"> Estimated Laying Time: </span>
                    <input className="searchInput underline new-nest-3"
                        name="laytime" onChange={this.handleInput}></input>

                </div>
                <div className="new-nest-grid">
                    <span className="new-nest-1"> Taken to Lab: </span>
                    <input className="searchInput underline new-nest-4"
                        name="rehomed" onChange={this.handleInput}></input>

                </div>
            </div>
        </>


    }
}

export default NestInput;