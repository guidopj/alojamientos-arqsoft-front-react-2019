import axios from "axios";
const baseURL = 'http://127.0.0.1:8000'

export const API = {
    async fetchAccommodations() {
        const result = await axios(
            `${baseURL}/accommodations`,
          );
        return result
    }, 

    async createAccommodation(acc) {
        return axios.post(`${baseURL}/accommodations/create_accommodation`, acc);
    },

    async login(username,password) {
        return axios.post(`${baseURL}/accounts/login`, {
            username: username.value,
            password: password.value,
        })
    },

    async register(data) {
        return axios.post(`${baseURL}/accounts/register`, 
            {
                username: data.username.value,
                password1: data.password.value,
                password2: data.confirm_password.value
            }
        );
    }
}