import { combineReducers } from 'redux'

export const ideaReducer = (state = {}, action) => {
    switch (action.type) {
    case 'ADD_IDEA': {
        let length = Object.keys(state).length
        let idea = {}
        idea[length] = action.idea
        return Object.assign({}, state, idea)
    }
    case 'UPVOTE': {
        let change
        switch (action.change) {
        case 'increase':
            change = 1
            break
        case 'decrease':
            change = -1
            break
        default:
            change = 0
        }
        let idea = {}
        let ideaData = Object.assign({}, state[action.ideaId], {upvote: state[action.ideaId].upvote + change})
        idea[action.ideaId] = ideaData
        return Object.assign({}, state, idea)
    }
    case 'DOWNVOTE': {
        let change
        switch (action.change) {
        case 'increase':
            change = 1
            break
        case 'decrease':
            change = -1
            break
        default:
            change = 0
        }
        let idea = {}
        let ideaData = Object.assign({}, state[action.ideaId], {downvote: state[action.ideaId].downvote + change})
        idea[action.ideaId] = ideaData
        return Object.assign({}, state, idea)
    }
    default: 
        return state
    }
}

const INITIAL_USER = {}
    
export const userReducer = (state = INITIAL_USER, action) => {
    switch (action.type) {
    case 'UPVOTE':{
        let data = {}
        data[action.ideaId] = 'upvote'
        if (action.unvote === 'unvote')
            data[action.ideaId] = undefined
        return Object.assign({}, state, data)
    }
    case 'DOWNVOTE':{
        let data = {}
        data[action.ideaId] = 'downvote'
        if (action.unvote === 'unvote')
            data[action.ideaId] = undefined
        return Object.assign({}, state, data)
    }
    default:
        return state
    }
}

export default combineReducers({
    ideas: ideaReducer,
    user: userReducer
})