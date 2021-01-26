
const getPromiseViaCallback = callback => new Promise(callback)

const getPromise = (resolveArg, rejectArg) => new Promise((resolve, reject) => {
    resolve(resolveArg)
    reject(rejectArg)
})


export {getPromiseViaCallback}


