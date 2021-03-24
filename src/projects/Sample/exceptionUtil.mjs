function subscribe(action, errorAction, finallyAction)
{
    try {
        return action()
    }
    catch (ex) {
        errorAction(ex)
    }
    finally {
        if (arguments.length > 2)
            finallyAction()
    }
}

function subscribeForFinally(action,  finallyAction)
{
    try {
        return action()
    }
    finally {
        finallyAction()
    }
}

export {subscribe, subscribeForFinally}