class UserInfo {
    constructor(id, username, name, email)
    {
        this._id = id
        this._username = username
        this._name = name
        this._email = email
        this._registerdate = new Date()
        this._lastupdate = this._registerdate
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

    get registerdate()
    {
        return this._registerdate
    }

    set lastupdate(date)
    {
        this._lastupdate = date
    }

    get lastupdate()
    {
        return this._lastupdate
    }

    get email()
    {
        return this._email
    }
}

export {UserInfo}
