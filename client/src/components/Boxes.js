import React, { Component } from 'react'
import API from '../API';

class Boxes extends Component {

    displayCards = () => {
        if (this.props.list.length === 0) {
            return <div className="col-md-12 text-center">No books yet...</div>
        } else {
            return this.props.list.map(({ bookId, title, author, description, image, link, price }) => {
                return <div key={bookId} className="row d-flex flex-wrap align-items-center pt-3 mb-5 cardBack">
                    <div className="col-md-3 imgCss">
                        <img className="pb-3" src={image} alt="bookcover" />
                    </div>
                    <div className="col-md-6">
                        <h2>{title} By <u>{author}</u></h2>
                        { (isNaN(price)) ? console.log(bookId + " has no price") : <p><b>${price}</b></p>}
                        <p>{description}</p>
                    </div>
                    <div className="col-md-2 offset-1">
                        <button onClick={this.saveBook.bind(this, {bookId, title, author, description, image, link, price})} className="btn btn-primary">Save</button><br />
                        <a className="btn mb-1 mt-1 btn-info" href={link} target="__blank">To link</a><br />
                        <a href="#upScreen" className="btn mb-3 btn-dark">Back up</a>
                    </div>
                    <hr />
                </div>
            })
        }
    }

    saveBook = (info) => {
        API.getBooks()
        .then(data => {
            var run = true;
            for (let i = 0; i < data.length; i++){
                if (data[i].bookId === info.bookId){
                   run = false; 
                }
            }

            if (run){
                API.saveBook(info)
            }

        })
    }

    render() {
        return (
            <section className="conatiner pt-4">
                {this.displayCards()}
            </section>
        )
    }
}

export default Boxes
