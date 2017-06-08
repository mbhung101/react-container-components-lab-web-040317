// Code SearchableMovieReviewsContainer Here
import React from 'react';
 import { Component } from 'react';
 require('es6-promise').polyfill();
 require('isomorphic-fetch');

 import MovieReviews from './MovieReviews'

 const API_KEY = '624219117d5d48ff8ef45388cdeeef75';
 const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + `api-key=${API_KEY}`;


 class SearchableMovieReviewsContainer extends Component {
   constructor() {
     super();
     this.state = {
       reviews: [],
       searchTerm: ''
     };
     this.componentWillMount.bind(this)
   }

   componentWillMount(){
     fetch(URL + this.state.searchTerm)
       .then(resp => resp.json() )
       .then(response => this.setState({ reviews: response.results}) );
   }

   render() {
     return (
       <div className="searchable-movie-reviews">
         <MovieReviews reviews={this.state.reviews} />
       </div>
     )
   }

 }

 export default SearchableMovieReviewsContainer;
