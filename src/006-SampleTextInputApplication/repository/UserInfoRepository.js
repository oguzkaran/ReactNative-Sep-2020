class UserInfoRepository {
  exists = (email, password) => users.findIndex(ui => ui.email == email && ui.password == password) != -1

  save = (email, password) => {
      if (users.findIndex(ui => ui.email == email && ui.password == password) != -1)
        return false;

      users.push(new UserInfo(email, password))

      return true
  }
}

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

let users = [new UserInfo('oguzkaran@csystem.org', 'csd1993'), new UserInfo('aslank@csystem.org', 'csd-1993')]

export {UserInfoRepository}
