import {UserInfo} from "../entity/UserInfo.js"
import {CSDChatAppHelper} from "../dal/CSDChatAppHelper.js"

class CSDChatMobileAppService {
    constructor(chatAppHelper)
    {
        this._chatAppHelper = chatAppHelper
    }

    async saveUser(userInfo)
    {
        const user = await this._chatAppHelper.saveUser(userInfo)

        return new Promise((resolve, reject) => {
            resolve(user)
            reject(new Error("CSDChatMobileAppService.saveUser"))
        })
    }

    updateUserDate(userInfo)
    {
        //...
        return this._chatAppHelper.updateUserDate(userInfo)
    }

    deleteAllUsers()
    {
        //...
        return this._chatAppHelper.deleteAllUsers()
    }

    getUserById(id)
    {
        //...
        return this._chatAppHelper.getUserById(id)
    }

    getUserIdByUsername(username)
    {
        return this._chatAppHelper.getUserIdByUserName(username)
    }

    async getAllUsers()
    {
        const users = await this._chatAppHelper.getAllUsers()

        return new Promise((resolve, reject) => {
            resolve(users)
            reject(new Error("CSDChatMobileAppService.getAllUsers"))
        })

    }

    static getInstance()
    {
        return g_chatAppMobileService
    }
}

const g_chatAppMobileService = new CSDChatMobileAppService(CSDChatAppHelper.getInstance())

export {CSDChatMobileAppService}
