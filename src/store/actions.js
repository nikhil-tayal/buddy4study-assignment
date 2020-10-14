export const REQUEST_API_MOVIE_DATA = "REQUEST_API_MOVIE_DATA";
export const RECEIVE_API_MOVIE_DATA = "RECEIVE_API_MOVIE_DATA";

export const requestApiMovieData = () => ({ type: REQUEST_API_MOVIE_DATA });
export const receiveApiMovieData = data => ({ type: RECEIVE_API_MOVIE_DATA, data });