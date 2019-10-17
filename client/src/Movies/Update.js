import React, {useState} from 'react';


const initialMovie ={
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
  }
  

const UpdateForm = props => {
    const [movie, setMovie] = useState(initialMovie);


    const changeHandler = event => {
       setMovie({
           ...movie,
           [event.target.name]: event.target.value
       })
    }

    const handleSubmit = event => {
        event.preventDefault();

    }

    return(
        <form>
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

        </form>
    )
}

export default UpdateForm;