import {SampleAppHelper} from './dal/SampleAppHelper.js'


class SampleAppService {
  constructor()
  {
    this._sampleAppHelper = new SampleAppHelper()
  }

  saveUser(email, password)
  {
    //...
    return this._sampleAppHelper.saveUser(email, password)
  }

  userExists(email, password)
  {
    //...
    return this._sampleAppHelper.exists(email, password)
  }
}

export {SampleTextInput}
