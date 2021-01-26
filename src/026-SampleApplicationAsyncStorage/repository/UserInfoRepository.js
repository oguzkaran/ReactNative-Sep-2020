import {UserInfo} from "../entity/UserInfo.js"
import AsyncStorage from '@react-native-async-storage/async-storage';

const keyPrefix = "@user"
const idKey = `${keyPrefix}:id`

class UserInfoRepository {
    async save(userInfo)
    {
        const keys = await AsyncStorage.getAllKeys()

        let status = true

        if (keys.length != 0) {
            const userKeys = await AsyncStorage.multiGet(keys.filter(k => k.startsWith(`${keyPrefix}`)))

            status = userKeys.map(ui => JSON.parse(ui[1])).filter(ui => ui.username == userInfo.username).length == 0
        }

        if (status) {
            const idValue = await AsyncStorage.getItem(idKey)
            const currentId = idValue == null ? 1 : parseInt(idValue) + 1

            userInfo.id = currentId
            await AsyncStorage.setItem(`${keyPrefix}:${currentId}`, JSON.stringify(userInfo))
            await AsyncStorage.setItem(idKey, `${currentId}`)
        }

        return new Promise((resolve, reject) => {
            resolve(userInfo)
            reject(new Error("UserInfoRepository.save"))
        })
    }

    async deleteAll()
    {
        const keys = await AsyncStorage.getAllKeys()
        await AsyncStorage.multiRemove(keys)

        return new Promise((resolve, reject) => {
            reject(new Error("UserInfoRepository.save"))
        })
    }

    async findById(id)
    {
        const item = await AsyncStorage.getItem(`${keyPrefix}:${id}`)

        return new Promise((resolve, reject) => {
            resolve(item != null ? JSON.parse(item) : undefined)
            reject(new Error("UserInfoRepository.save"))
        })
    }

    async existsUser(username, password)
    {
        const keys = await AsyncStorage.getAllKeys()

        if (keys.length == 0)
            return false

        const existsUserCallback = ui => JSON.parse(ui[1]).username == username && JSON.parse(ui[1]).password == password

        const status = await AsyncStorage.multiGet(keys).filter(existsUserCallback).length != 0

        return new Promise((resolve, reject) => {
            resolve(status)
            reject(new Error("UserInfoRepository.save"))
        })
    }

    async findUserIdByUserName(username)
    {
        const keys = await AsyncStorage.getAllKeys()

        if (keys.length == 0)
            return false

        const findUserIdByUsernameCallback = ui => JSON.parse(ui[1]).username == username
        const usersInfo = await AsyncStorage.multiGet(keys).filter(findUserIdByUsernameCallback)

        return  usersInfo.length > 0 ? JSON.parse(usersInfo[0][1]).id : 0
    }

    async updateDate(userInfo)
    {
        const user = this.findById(userInfo.id)

        if (user == undefined)
            return false

        user.lastUpdate = new Date()
        await AsyncStorage.setItem(`${keyPrefix}:${user.id}`, JSON.stringify(user))

        return true
    }

    async getAll()
    {
        const keys = await AsyncStorage.getAllKeys()
        const usersInfo = await AsyncStorage.multiGet(keys.filter(k => k.startsWith(`${keyPrefix}`) && !k.includes('id')))

        return new Promise((resolve, reject) => {
            resolve(usersInfo.map(ui => JSON.parse(ui[1])))
            reject(new Error("UserInfoRepository.getAll"))
        })
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
