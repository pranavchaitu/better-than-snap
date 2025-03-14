export type CreateUserPayload = {
    email : string,
    profileUrl : string,
    name : string
}

export type PostCardType = {
    id : string
    url : string,
    likeCount : number,
    creator : {
        profileUrl : string,
        username : string
    },
    isSaved : boolean
}

export type PostCardListType = PostCardType[] | {
    error : unknown,
    message : string
}