import {UserInfo} from "../entity/UserInfo.js"
import {CSDChatAppHelper} from "../dal/CSDChatAppHelper.js"

class CSDChatMobileAppService {
    constructor(chatAppHelper)
    {
        this._chatAppHelper = chatAppHelper
    }

    saveUser(userInfo)
    {
        //...
        return this._chatAppHelper.saveUser(userInfo)
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

    exitsUserByUsername(username)
    {
        //...
        return this._chatAppHelper.existsUserByUsername(username)
    }

    getAllUsers()
    {
        //...
        return this._chatAppHelper.getAllUsers()
    }

    static getInstance()
    {
        return g_chatAppMobileService
    }
}

const g_chatAppMobileService = new CSDChatMobileAppService(CSDChatAppHelper.getInstance())

export {CSDChatMobileAppService}
