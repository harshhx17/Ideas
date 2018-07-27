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
        let idea = {}
        let ideaData = Object.assign({}, state[action.ideaId], {upvote: state[action.ideaId].upvote+1})
        idea[action.ideaId] = ideaData
        return Object.assign({}, state, idea)
    }
    case 'DOWNVOTE': {
        let idea = {}
        let ideaData = Object.assign({}, state[action.ideaId], {downvote: state[action.ideaId].downvote+1})
        idea[action.ideaId] = ideaData
        return Object.assign({}, state, idea)
    }
    default: 
        return state
    }
}
    
const INITIAL_USER = {
    upvote: [],
    downvote: []
}
    
export const userReducer = (state = INITIAL_USER, action) => {
    switch (action.type) {
    case 'UPVOTE':{
        let upvote = state.upvote
        upvote.push(action.ideaId)
        return Object.assign({}, state, upvote)
    }
    case 'DOWNVOTE':{
        let downvote = state.downvote
        downvote.push(action.ideaId)
        return Object.assign({}, state, downvote)
    }
    default:
        return state
    }
}
    
export default combineReducers({
    ideas: ideaReducer,
    user: userReducer
})