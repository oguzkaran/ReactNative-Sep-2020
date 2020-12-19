class UserInfo {
    constructor(id, username, name, email)
    {
        this._id = id
        this._username = username
        this._name = name
        this._email = email
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
}

export {UserInfo}
