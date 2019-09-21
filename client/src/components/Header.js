import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div className="row mt-3">
                <div id="upScreen" className="col-md-12">
                    <h1 id="title" className="text-center">Find your next book!</h1>
                </div>
                <div className="col-md-4">
                </div>
                <div className="col-md-4 mt-3 imgCss">
                    <a href="/books" className="btn btn-outline-primary link text-center">View saved books</a>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        )
    }
}

export default Header