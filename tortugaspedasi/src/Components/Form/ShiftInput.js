import React, { Component } from 'react';

class ShiftInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: "",
            lastName: "",
            date: ""
         }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value}, ()=>console.log(this.state))
    }
    addShift = () => {
        this.props.addShift(this.state.firstName, this.state.lastName, this.state.date)
    }

    render() { 
        let input = ["First Name", "Last Name", "Date"]
        return(
        <div className="shift-container">
                <h2>Shift</h2>
                    <div className="shift-component">
                        {input.map((i)=> <div className="new-shift-grid">
                            <span className="new-shift-1"> {i}: </span>
                            <input className="searchInput underline new-shift-2" 
                                   name={i} onChange={this.handleInput}></input>
                        </div>
                        )}    
                    </div>
            </div> 
        );
    }
}
 
export default ShiftInput;