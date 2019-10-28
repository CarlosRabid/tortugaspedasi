import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom' //do not delete Router Route
import { withTranslation } from 'react-i18next';
import './landing.css'
import CardLanding from './CardLanding';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            users: []
        }
    }

    render() {
        const { t } = this.props;
        if (!this.props.isLoggedIn()) { return <Redirect to="/" /> }
        let dataLanding = [
            { title: 'Form', description: "Create a new observation form.", link: "/form" , button: "Create form"},
            { title: "All form data", description: "Review all available observation forms.", link: "/spread", button: "View data" },
            { title: "Analytics", description: " Review data analytics and create charts.", link: "/analytics" , button: "View analytics"}
        ]
        return (
            <div className="landing-container">
                {dataLanding.map(d => <CardLanding d={d} />)}
            </div>

        )
    }
}


export default withTranslation('translation')(Landing);