import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/saved/books")
            .then(data => data.data)
    },
    saveBook: info => {
        return axios.post(`/save/book`, info)
            .then(res => console.log(res))
    },
    deleteBook: id => {
        return axios.delete(`/delete/${id}`)
            .then(info => info)
    }
}