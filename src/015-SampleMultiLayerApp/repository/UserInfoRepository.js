import {UserInfo} from "../entity/UserInfo.js"

const g_users = []
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

    existsByUsername(username)
    {
        return g_users.findIndex(ui => ui.username == username) >= 0
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

export {UserInfoRepository}
