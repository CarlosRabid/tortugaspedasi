import React, { Component } from 'react';

class TurtleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            species: "",
            gender: "",
            condition:
            {
                status: "",
                stage: ""
            },
            dimensions: {
                plain: {
                    length: "",
                    width: ""
                },
                curve: {
                    length: "",
                    width: ""
                }
            },
            markings: {
                rightSide: "",
                leftSide: ""
            }
        }
    }


    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    addTurtleInput = () => {
        this.props.addTurtleInput(this.state.species, this.state.gender, 
            this.state.condition.status, this.state.condition.stage, 
            this.state.dimensions.plain.length, this.state.dimensions.plain.width, this.state.dimensions.curve.length, this.state.dimensions.curve.width,
            this.state.markings.rightSide, this.state.markings.leftSide )
    }

    // there is className = "child-turtle" for nested children to help with the CSS

    render() {
        
        return (
            <div className="turtle-container">
                <h2>Turtle Information</h2>
                <div className="turtle-component">
                    <div>
                        <span className="new-turtle-1"> Species: </span>
                        <input className="searchInput underline new-turtle-2"
                            name="species" onChange={this.handleInput}></input>
                    </div>

                    <div>
                        <span className="new-turtle-1"> Gender: </span>
                        <input className="searchInput underline new-turtle-2"
                            name="gender" onChange={this.handleInput}></input>
                    </div>

                    <div className="new-turtle-1">
                        Condition
                        <div className="child-turtle">
                            <span className="new-turtle-1"> Status: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="status" onChange={this.handleInput}></input>
                        </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Stage: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="stage" onChange={this.handleInput}></input>
                        </div>

                    </div>

                    <div className="new-turtle-1">
                        Dimensions

                        <div className="child-turtle" className="new-turtle-1"> Plain </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Length: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="plain-length" onChange={this.handleInput}></input>
                        </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Width: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="plain-width" onChange={this.handleInput}></input>
                        </div>

                        <div className="child-turtle" className="new-turtle-1"> Curve </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Width: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="curve-width" onChange={this.handleInput}></input>
                        </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Length: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="curve-width" onChange={this.handleInput}></input>
                        </div>

                    </div>

                    <div className="new-turtle-1"> 
                        Markings

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Right Side: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="right-side-marking" onChange={this.handleInput}></input>
                        </div>

                        <div className="child-turtle">
                            <span className="new-turtle-1"> Left Side: </span>
                            <input className="searchInput underline new-turtle-2"
                                name="left-side-marking" onChange={this.handleInput}></input>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default TurtleInput;