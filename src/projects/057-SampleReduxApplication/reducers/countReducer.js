import {COUNT_CHANGE} from '../constants'

const initialState = {count: 0}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_CHANGE:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state
    }
}

export default countReducer
