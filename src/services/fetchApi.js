import axios from 'axios';

const KEY = 'd4b5d9be5c7b4e34305e1e891f52eaa6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingToday = async () => {
 const response = await axios('trending/movie/day', {params: {
        api_key: KEY,
    }})

    return response.data.results;
}
