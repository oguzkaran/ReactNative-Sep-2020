import {UserInfo} from "../entity/UserInfo.js"

let g_users = []
let g_currentId = 1

class UserInfoRepository {
    constructor()
    {
    }

    save(userInfo)
    {
        if (!this.existsByUsername(userInfo.username)) {
            userInfo.id = g_currentId++
            g_users.push(userInfo)
        }

        return userInfo
    }

    deleteAll()
    {
        g_users = []
    }

    findById(id)
    {
        return g_users.find(ui => ui.id == id)
    }

    existsByUsername(username)
    {
        return g_users.findIndex(ui => ui.username == username) >= 0
    }

    findUserIdByUserName(username)
    {
        const index = g_users.findIndex(ui => ui.username == username)

        return index < 0 ? 0 : g_users[index].id;
    }

    updateDate(userInfo)
    {
        const index = g_users.findIndex(ui => ui.id == userInfo.id)

        if (index < 0)
            return false

        g_users[index].lastUpdate = new Date()

        return true
    }

    get all()
    {
        return [...g_users]
    }

    static getInstance()
    {
        //...
        return g_userInfoRepository
    }
}

const g_userInfoRepository = new UserInfoRepository()

const userInfoRepository = g_userInfoRepository

export {UserInfoRepository, userInfoRepository}
