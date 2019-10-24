import React, { Component } from 'react';

class NestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eggCount: "",
            layTime: "",
            hatchEst: "",
            rehomed: "",
            salvageable: "",

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
                    <form>
                        <label>
                            Date: 
                            <input type="date" name="layTime" value={this.state.layTime} onChange={this.handleInput}/></label>
                    </form>
                </div>
                <div className="new-nest-grid">
                    <span className="new-nest-1"> Estimated Hatching Time: </span>
                    <form>
                        <label>
                            Date: 
                            <input type="date" name="hatchEst" value={this.state.hatchEst} onChange={this.handleInput}/></label>
                    </form>
                </div>
                <div className="new-nest-grid" onChange={this.handleInput}>
                    <span className="new-nest-1"> Taken to Lab: </span> 
                    <select name="rehomed" id="">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
            </div>
        </>


    }
}

export default NestInput;
