  
import { RECEIVE_API_MOVIE_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_MOVIE_DATA:
      return data;
    default:
      return state;
  }
}