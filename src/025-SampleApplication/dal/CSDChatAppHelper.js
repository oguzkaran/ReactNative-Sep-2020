import {UserInfo} from "../entity/UserInfo.js"
import {UserInfoRepository} from "../repository/UserInfoRepository.js"

class CSDChatAppHelper {
    constructor(userInfoRepository)
    {
        this._userInfoRepository = userInfoRepository
    }

    saveUser(userInfo)
    {
        //...
        return this._userInfoRepository.save(userInfo)
    }

    deleteAllUsers()
    {
        this._userInfoRepository.deleteAll()
    }

    updateUserDate(userInfo)
    {
        //...
        return this._userInfoRepository.updateDate(userInfo)
    }

    exitsUserByUsername(username)
    {
        //...
        return this._userInfoRepository.existsByUsername(username)
    }

    getUserById(id)
    {
        return this._userInfoRepository.findById(id)
    }

    getUserIdByUserName(username)
    {
        return this._userInfoRepository.findUserIdByUserName(username)
    }

    getAllUsers()
    {
        //...
        return this._userInfoRepository.all
    }

    static getInstance()
    {
        return g_chatAppHelper
    }
}


const g_chatAppHelper = new CSDChatAppHelper(UserInfoRepository.getInstance())

export {CSDChatAppHelper}
