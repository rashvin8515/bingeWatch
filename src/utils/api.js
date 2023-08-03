import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQxNGNmZmE2MGIwZjc1NmU1YzgzNzBmODU2NDFlMyIsInN1YiI6IjY0YzlmMjQ5MGNiMzM1MDEzOTdhMWMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9f9cBZJehLIGQL3QBCiQ02sZXh1OVwUd65EhAP__UkM"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url,params) =>  {
    try{
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
    } catch (err){
        console.log(err);
        return err;
    }
}