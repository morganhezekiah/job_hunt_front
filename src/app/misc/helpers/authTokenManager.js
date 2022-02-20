

let USER_TOKEN_KEY ="USER_TOKEN_KEY"
export const SAVE_USER_TOKEN = token =>{
    localStorage.setItem(USER_TOKEN_KEY, token);
}

export const GET_USER_TOKEN = async ()=>{
    return await localStorage.getItem(USER_TOKEN_KEY)
}