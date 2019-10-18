import React, { Component } from 'react';

class UpdateForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",

        }
    }

    closePopUp = () => {
        this.props.closePopUp()
    }

    update = (event) => {
        let item = event.target
        this.setState({
            name: item
        })
    }

    render() {
        return (
            <div className="popUp">
                <h5>Update</h5>
                <div> Name:
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.update}
                    />
                </div>
                <button onClick={this.closePopUp} >
                    Close
                </button>
            </div>)

    }
}

export default UpdateForm;