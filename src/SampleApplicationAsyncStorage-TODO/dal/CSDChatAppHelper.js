import {UserInfo} from "../entity/UserInfo.js"
import {UserInfoRepository} from "../repository/UserInfoRepository.js"

class CSDChatAppHelper {
    constructor(userInfoRepository)
    {
        this._userInfoRepository = userInfoRepository
    }

    async saveUser(userInfo)
    {
        //...
        const user = await this._userInfoRepository.save(userInfo)

        return new Promise((resolve, reject) => {
            resolve(user)
            reject(new Error("CSDChatAppHelper.saveUser"))
        })
    }

    async deleteAllUsers()
    {
        this._userInfoRepository.deleteAll()
    }

    async updateUserDate(userInfo)
    {
        //...
        return this._userInfoRepository.updateDate(userInfo)
    }

    async getUserById(id)
    {
        return this._userInfoRepository.findById(id)
    }

    async getUserIdByUserName(username)
    {
        return this._userInfoRepository.findUserIdByUserName(username)
    }

    async getAllUsers()
    {
        const users = await this._userInfoRepository.getAll()

        return new Promise((resolve, reject) => {
            resolve(users)
            reject(new Error("CSDChatAppHelper.getAllUsers"))
        })
    }

    static getInstance()
    {
        return g_chatAppHelper
    }
}

const g_chatAppHelper = new CSDChatAppHelper(UserInfoRepository.getInstance())

export {CSDChatAppHelper}
