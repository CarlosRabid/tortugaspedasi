import React, { Component } from 'react';
import '../styles/loader.css'

class Loader extends Component {

    render() {
        return (
            <div className="turtle-wrapper">
                <section class="turtle-loader-container">
                    <div class="turtle-loaderhead"></div>
                    <div class="legs-01"></div>
                    <div class="legs-02"></div>
                    <div class="tail"></div>
                    <div class="shell">
                        <div></div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Loader;