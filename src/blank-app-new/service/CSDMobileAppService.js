import {UserInfo} from '../entity/UserInfo.js'
import {CSDChatAppHelper} from '../dal/CSDChatAppHelper.js'

class CSDMobileAppService {
  constructor(setChatAppHelper)
  {
      this._setChatAppHelper = setChatAppHelper
  }
  saveUser(UserInfo)
  {
      return _setChatAppHelper.saveUser(userInfo)
  }

  existUserByUserName(userName)
  {
      return _setChatAppHelper.existUserByUserName(userName)
  }

  getAllUsers()
  {
      return _setChatAppHelper.getAllUsers()
  }

  static getInstance()
  {
    return g_ChatAppMobileService
  }
}

const g_ChatAppMobileService = new CSDMobileAppService(CSDChatAppHelper.getInstance())

export {CSDMobileAppService}
