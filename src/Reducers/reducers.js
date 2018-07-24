import { combineReducers } from 'redux'

export const ideaReducer = (state = [], action) => {
    switch (action.type) {
    case 'ADD_IDEA': {
        return [...state, action.idea]
    }
    default: 
        return state
    }
}

export default combineReducers({
    ideas: ideaReducer
})