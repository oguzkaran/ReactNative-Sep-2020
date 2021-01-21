import {UserInfo} from "../entity/UserInfo.js"
import AsyncStorage from '@react-native-async-storage/async-storage';

const keyPrefix = "@user"
const idKey = `${keyPrefix}:id`

class UserInfoRepository {
    async getAllKeys()
    {
        return await AsyncStorage.getAllKeys().filter(k => k.startsWith(keyPrefix))
    }

    async save(userInfo)
    {
        if (!this.existsByUsername(userInfo.username)) {
            const idValue = await AsyncStorage.getItem(idKey)
            const currentId = idValue == null ? 1 : parseInt(idValue) + 1
            userInfo.id = currentId
            await AsyncStorage.setItem(`${keyPrefix}:${currentId}`, JSON.stringify(userInfo))
            await AsyncStorage.setItem(idKey, `${currentId}`)
        }

        return userInfo
    }

    deleteAll()
    {
        g_users = []
    }

    async findById(id)
    {
        const item = await AsyncStorage.getItem(`${keyPrefix}:${id}`)

        return item != null ? item : undefined
    }

    async existsUser(username, password)
    {
        const keys = await getAllKeys()

        if (keys.length == 0)
            return false

        const existsUserCallback = ui => JSON.parse(ui[1])._username == username && JSON.parse(ui[1])._password == password

        return await AsyncStorage.multiGet(keys).filter(existsUserCallback).length != 0
    }

    async existsByUsername(username)
    {
        const keys = await getAllKeys()

        if (keys.length == 0)
            return false

        const existsUserCallback = ui => JSON.parse(ui[1])._username == username)

        return await AsyncStorage.multiGet(keys).filter(existsUserCallback).length != 0
    }

    async findUserIdByUserName(username)
    {
        const keys = await getAllKeys()

        if (keys.length == 0)
            return false

        const findUserIdByUsernameCallback = ui => JSON.parse(ui[1])._username == username)
        const usersInfo = await AsyncStorage.multiGet(keys).filter(findUserIdByUsernameCallback)

        return  usersInfo.length > 0 ? JSON.parse(usersInfo[0][1])._id : 0
    }

    updateDate(userInfo)
    {
        const index = g_users.findIndex(ui => ui.id == userInfo.id)

        if (index < 0)
            return false

        g_users[index].lastUpdate = new Date()

        return true
    }

    async getAll()
    {
        return await AsyncStorage.multiGet(await getAllKeys()).map(ui => JSON.parse(ui[1]))
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
