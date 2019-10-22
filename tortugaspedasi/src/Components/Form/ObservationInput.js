import React, { Component } from 'react';


let beaches = [
    {
        name: "Playa El Toro",
        latitude: 7.530178,
        longitude: -80.003034
    },
    {
        name: "Playa El Arenal",
        latitude: 7.559493,
        longitude: -80.019275
    },
    {
        name: "Playa Lagarto",
        latitude: 7.506391,
        longitude: -79.999284
    }


]

class ObservationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            time: "", // placeholder but editable
            locationLatitude: "",  // set-up by beach selection
            locationLongitude: "", // set-up by beach selection
            comments: "", //free input

        }
    }
    handleLocation = async (event) => {
        let currentBeach = event.target.value ? beaches.find(b => b.name === event.target.value) : { latitude: "", longitude: "" }
        let locationLatitude = { ...this.state.locationLatitude }
        let locationLongitude = { ...this.state.locationLongitude }
        locationLatitude = currentBeach.latitude
        locationLongitude = currentBeach.longitude
        await this.setState({ locationLatitude, locationLongitude })
    }

    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state))
    }
    addShift = () => {
        this.props.addShift(this.state.time, this.state.location, this.state.comments)
    }

    componentDidMount = () => {
        this.setState({date: new Date()})
    }

    // getDate2 = () => {
    //     let currentDate = new Date();
    //     let date = currentDate.getDate();
    //     let month = currentDate.getMonth();
    //     let year = currentDate.getFullYear();
    //     let monthDateYear = (month + 1) + "/" + date + "/" + year;
    //     return monthDateYear
    // }

    // getDate = () => {
    //     let today = new Date().toLocaleDateString(undefined, {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric'
    //     })
    //     return today
    // }

    render() {
        let date = new Date()
        return (
            <div className="observation-container">
                <h2>Observation</h2>

                <form >
                    <div>Date: <input type="date" name="date" onChange={this.handleInput} value={this.getdate} ></input></div>
                    <div>Time: <input type="time" name="time" onChange={this.handleInput}></input></div>
                </form>


                <div className="observation-component">
                    <div>
                        <span>Location:</span>
                        <select onChangeCapture={this.handleLocation}>
                            <option value="" >Select</option>
                            <option value="Playa El Arenal"  >Playa El Arenal</option>
                            <option value="Playa El Toro" >Playa El Toro</option>
                            <option value="Playa Lagarto" >Playa Lagarto</option>
                        </select>
                    </div>
                </div>

                <div className="observation-component">Comments:
                <input className="searchInput-observationInput"
                        name="comments" onChange={this.handleInput}></input>
                </div>
            </div>
        );

    }
}

export default ObservationInput;