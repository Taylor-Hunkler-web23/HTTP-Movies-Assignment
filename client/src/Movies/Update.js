import React, { useState, useEffect } from 'react';
import axios from 'axios';


const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
}



const UpdateForm = props => {
    console.log(props, 'props in update')
    const [movie, setMovie] = useState(initialMovie);


    useEffect(() => {
        const movieToEdit = props.movie.find(
            movie => `${movie.id}` === props.match.params.id
        );
        if (movieToEdit) setMovie(movieToEdit);
    }, [props.movie, props.match.params.id])

    const changeHandler = event => {
        event.persist();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value

        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(response => {
                props.setMovie([...props.movie, response.data])
                props.history.push('/')
            })
            .catch(err => console.log(err))


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                onChange={changeHandler}
                placeholder="Title"
                value={movie.title}
            />
            <input
                type="text"
                name="director"
                onChange={changeHandler}
                placeholder="Director"
                value={movie.director}
            />
            <input
                type="text"
                name="metascore"
                onChange={changeHandler}
                placeholder="Metascore"
                value={movie.metascore}
            />
            <input
                type="text"
                name="stars"
                onChange={changeHandler}
                placeholder="Stars"
                value={movie.stars}
            />
            <button type='submit'>Edit</button>

        </form>
    )
}

export default UpdateForm;