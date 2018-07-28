export const addIdea = idea => ({
    type: 'ADD_IDEA',
    idea
})

export const upvote = (ideaId,change,unvote) => ({
    type: 'UPVOTE',
    ideaId,
    change,
    unvote
})

export const  downvote = (ideaId,change,unvote) => ({
    type: 'DOWNVOTE',
    ideaId,
    change,
    unvote
})