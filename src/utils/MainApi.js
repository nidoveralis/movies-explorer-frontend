import {MAIN_URL} from './constant';

class Api {
  constructor() {
    this._headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this._baseUrl = MAIN_URL;
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
      credentials: 'include',
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
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body:JSON.stringify({
      email: data.email,
      password: data.password
    })
    },
    )
    .then((response => response.json()))
    .then((data) => {
      return data
    })
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => this._getResponseData(res))
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      }) 
    })
    .then(res => this._getResponseData(res))
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(res => this._getResponseData(res))
  }

  addMovies(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body:JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,        
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
    .then(res => this._getResponseData(res))
  };

  removeMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

};

export const api = new Api();
