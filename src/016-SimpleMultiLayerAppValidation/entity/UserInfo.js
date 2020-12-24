class UserInfo {
    constructor(id, username, name, email)
    {
        this._id = id
        this._username = username
        this._name = name
        this._email = email
        this._registerDate = new Date()
        this._lastUpdate = this._registerDate
    }

    get id()
    {
        return this._id
    }

    set id(value)
    {
        this._id = value
    }

    get username()
    {
        return this._username
    }

    get name()
    {
        return this._name
    }

    get email()
    {
        return this._email
    }

    get registerDate()
    {
        return this._registerDate
    }

    get lastUpdate()
    {
        return this._lastUpdate
    }

    set lastUpdate(date)
    {
        this._lastUpdate = date
    }
}

export {UserInfo}
