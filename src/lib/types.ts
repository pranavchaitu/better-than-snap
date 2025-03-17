export type CreateUserPayload = {
    email : string,
    profileUrl : string,
    name : string
}

export type UserPayload = {
    username: string;
    id: string;
    profileUrl: string;
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
