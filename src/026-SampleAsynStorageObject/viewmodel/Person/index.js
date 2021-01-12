class Person {
    constructor(name, email)
    {
        this._name = name
        this._email = email
    }

    get name()
    {
        return this._name
    }

    set name(value)
    {
        this._name = value
    }

    get address()
    {
        return this._name
    }

    set address(value)
    {
        this._name = value
    }
}


export default Person
