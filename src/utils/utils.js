const config = {
  baseUrl:'https://api.nomoreparties.co',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default config;