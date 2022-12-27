import config from "./utils";

class Api {
  constructor(data) {
    this._headers = data.headers;
    this._baseUrl = 'http://localhost:3000';
  }

  _getResponseData(res) {
    if(!res) {
      console.log(res, res.status)
    }
    return res.json()
  }

  signUp(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      creditals: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      }) 
    })
    .then(res => this._getResponseData(res))
  }

  signIn(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      creditals: 'include',
      body: JSON.stringify({
        email: data.email,
        password: data.password
      }),
    })
    .then(res => res.json())
    .then((data) => {
      if (data.token){
        return data;
      } 
    })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      creditals: 'include',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

}

export const api = new Api(config);