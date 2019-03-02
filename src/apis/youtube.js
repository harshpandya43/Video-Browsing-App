import axios from 'axios';

const KEY ="AIzaSyCnJZLePV7MD0ryil0ta09ZEKY6ikUNlt0";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }

});
