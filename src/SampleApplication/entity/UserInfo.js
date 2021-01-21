class UserInfo {
    constructor(id, username, name, email)
    {
        this.id = id
        this.username = username
        this.name = name
        this.email = email
        this.registerDate = new Date()
        this.lastUpdate = this.registerDate
    }
}

export {UserInfo}
