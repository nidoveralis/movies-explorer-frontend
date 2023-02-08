import {MOVIE_URL} from "./constant";

class Api {
  constructor() {
    this._headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this._baseUrl = MOVIE_URL;
  }

  _getResponseData(res) {
    if(!res) {
      console.log(res, res.status)
    }
    return res.json()
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res=>this._getResponseData(res))
  }
}

export const apiMovie = new Api();