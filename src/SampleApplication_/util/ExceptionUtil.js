class ExceptionUtil {
    static subscribe(action, errorAction, finallyAction)
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
    static subscribeJustFinally(action,  finallyAction)
    {
        try {
            return action()
        }
        finally {
            finallyAction()
        }
    }
}



export {ExceptionUtil}
