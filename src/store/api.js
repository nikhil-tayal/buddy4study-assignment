import { API_GET_MOVIE_DATA } from "../utils/APIURLS";
import { API_SECRET_KEY } from "../utils/config";

  
export const fetchData = async () => {
    try {
      const response = await fetch(API_GET_MOVIE_DATA(API_SECRET_KEY));
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  