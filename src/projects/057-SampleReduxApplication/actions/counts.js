import {COUNT_CHANGE} from '../constants'

export function changeCountAction(count)
{
    return {
        type: COUNT_CHANGE,
        payload: count
    }
}
