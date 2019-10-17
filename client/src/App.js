import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateForm from './Movies/Update.js'
import axios from 'axios';
const App = () => {
  const [savedList, setSavedList] = useState([]);

const [movie, setMovie] = useState([]);
useEffect (() => {
  axios
  .get("http://localhost:5000/api/movies")
  .then(response => setMovie(response.data))
  .catch(err => console.log(err.response));

}, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />

      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateForm {...props} movie={movie} setMovie={setMovie} />
        }}
      />

      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
    </>
  );
};

export default App;
