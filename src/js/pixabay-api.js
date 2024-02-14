import { refs } from "./refs";
import axios from "axios";


export async function pixabayApi(userText, page) {
    refs.gallery.classList.add("loader");
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const API_KEY = "42305784-5d55228baaa9a6392a5b2668b";
    axios.defaults.params = {
        key: API_KEY,
        q: userText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
    };

    const {data} = await axios.get();
    return data;
}