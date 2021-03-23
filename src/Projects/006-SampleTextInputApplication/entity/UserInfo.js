class UserInfo {
  constructor(email, password)
  {
    this._email = email
    this._password = password
    this._registerDate = new Date()
  }

  get email() {return this._email}
  get password() {return this._password}
}


export {UserInfo}
