import axios from "axios";

export const ApiService = new axios.create({
    baseUrl: "https://fakestoreapi.com/"
})