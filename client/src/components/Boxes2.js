import React, { Component } from 'react'
import API from '../API';

export class Boxes2 extends Component {

    state = {
        list: []
    }

    updateState = () => {
        API.getBooks()
        .then(info => {
            let ar = [];
            for (let i = 0; i < info.length; i++){
                let temp = {
                    _id: info[i]._id,
                    title: info[i].title,
                    author: info[i].author,
                    image: info[i].image,
                    link: info[i].link,
                    description: info[i].description,
                    price: info[i].price
                }
                ar.push(temp)
            }
            this.setState({list: ar})
        })
    }

    getSaved = () => {
        if (this.state.list.length === 0){
            return <div className="col-md-12 text-center">No Saved Books...</div>
        } else {
            return this.state.list.map(({_id, title, author, description, image, link, price }) => {
                return <div key={_id} className="row d-flex flex-wrap align-items-center pt-3 mb-5 cardBack">
                    <div className="col-md-3 imgCss">
                        <img className="pb-3" src={image} alt="bookcover" />
                    </div>
                    <div className="col-md-6">
                        <h2>{title} By <u>{author}</u></h2>
                        { (isNaN(price)) ? console.log(_id + " has no price") : <p><b>${price}</b></p>}
                        <p>{description}</p>
                    </div>
                    <div className="col-md-2 offset-1">
                        <button onClick={this.deleteBook.bind(this, _id)} className="btn btn-danger">Delete</button><br />
                        <a className="btn mb-1 mt-1 btn-info" href={link} target="__blank">To link</a><br />
                        <a href="#upScreen" className="btn mb-3 btn-dark">Back up</a>
                    </div>
                    <hr />
                </div>
            })
        }

    }

    deleteBook = (id) => {
        API.deleteBook(id)
            .then(() => {
                this.updateState()
            })
    }

    componentDidMount() {
        this.updateState();
    }

    render() {
        return (
            <section className="conatiner pt-4">
                {this.getSaved()}
            </section>
        )
    }
}

export default Boxes2
