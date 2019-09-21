import React, { Component } from 'react'

export class Header2 extends Component {
    render() {
        return (
            <div className="row mt-3">
                <div id="upScreen" className="col-md-12">
                    <h1 id="title" className="text-center">Here are the saved books!</h1>
                </div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4 mt-3 imgCss">
                    <a href="/" className="btn btn-outline-primary link text-center">Go back</a>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        )
    }
}

export default Header2