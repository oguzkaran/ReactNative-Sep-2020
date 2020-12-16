import {UserInfoRepository} from './repository/UserInfoRepository.js'
import {UserInfo} from './entity/UserInfo.js'

class SampleAppHelper {
  constructor()
  {
    this._userInfoRepository = new UserInfoRepository()
  }

  userExists => (email, password) => this._userInfoRepository.exists(email, password)
  saveUser => (email, password) => this._userInfoRepository.exists(email, password)
}


export {SampleAppHelper}
