import config from "./utils";

class Api {
  constructor(data) {
    this._headers = data.headers;
    this._baseUrl = data.baseUrl;
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
      creditals: 'include',
    })
    .then(res=>this._getResponseData(res))
  }
}

export const apiMovie = new Api(config);