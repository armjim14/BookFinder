import React, { Component } from 'react';

import Header from './components/Header';
import Search from './components/Search';
import Boxes from './components/Boxes';

class IndexPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search renderImages={this.props.sendList} />
                <Boxes list={this.props.list} />
            </div>
        )
    }
}

export default IndexPage
