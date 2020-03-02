import axios from 'axios';

const KEY = 'AIzaSyCYgf_beTIIi-AJXcRiMcSFGvz5WP1rjj0';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

