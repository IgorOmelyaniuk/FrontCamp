import { API_KEY, API_URL } from './config';

const sendRequest = async (source) => {
    const response = await fetch(`${API_URL}sources=${source}&apiKey=${API_KEY}`);
    const { articles } = await response.json();
    return articles;
}

export default sendRequest;