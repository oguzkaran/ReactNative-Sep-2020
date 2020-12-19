import {UserInfo} from "../entity/UserInfo.js"
import {UserInfoRepository} from "../repository/UserInfoRepository.js"

class CSDChatAppHelper {
    constructor(userInfoRepository, productRepository)
    {
        this._userInfoRepository = userInfoRepository
        this._productRepository = productRepository
    }

    saveUser(userInfo)
    {
        //...
        return this._userInfoRepository.save(userInfo)
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
