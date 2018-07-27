export const addIdea = idea => ({
    type: 'ADD_IDEA',
    idea
})

export const upvote = ideaId => ({
    type: 'UPVOTE',
    ideaId
})

export const  downvote = ideaId => ({
    type: 'DOWNVOTE',
    ideaId
})