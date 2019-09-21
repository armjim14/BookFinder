import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {

    state = {
        search: ""
    }

    sendInfo = e => {

        e.preventDefault();

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
            .then(res => {
                let ar = res.data.items;
                let bookList = [];
                for(let i = 0; i < ar.length; i++){
                    let temp = {
                        bookId: ar[i].id,
                        title: ar[i].volumeInfo.title || "No Title Available",
                        author: (ar[i].volumeInfo.authors) ? ar[i].volumeInfo.authors[0] : "No Authors Available",
                        description: ar[i].volumeInfo.description || "No Description",
                        image: ar[i].volumeInfo.imageLinks.thumbnail || "No Image",
                        link: ar[i].volumeInfo.infoLink || "#",
                        price: (ar[i].saleInfo.saleability === "FOR_SALE") ? ar[i].saleInfo.retailPrice.amount : "No Price Available"
                    }

                    bookList.push(temp)
                }
                this.props.renderImages(bookList)
            })
    }

    updateSearch = e => {
        this.setState({search: e.target.value});
    }

    render() {
        return (
            <div className="row pt-4">
                <div className="col-sm-6 offset-sm-3 text-center">
                    <form onSubmit={this.sendInfo}>
                    <div className="input-group mb-3">
                        <input onChange={this.updateSearch} id="info" type="text" className="form-control" placeholder="Enter a key word" />
                        <div className="input-group-append">
                            <span type="submit" onClick={this.sendInfo} className="clickable input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Search


