import axios from 'axios';

const API_ROOT =
  process.env.NODE_ENV === "production"
    ? "/"
    : `http://localhost:4000/`;

const instance = axios.create({ baseURL: API_ROOT });

const getGitHubToken = async(data) => {

}