

let USER_SLUG_KEY ="USER_SLUG_KEY";
let COMPANY_SLUG_KEY ="COMPANY_SLUG_KEY";
export const SAVE_USER_SLUG = slug =>{
    console.log(slug);
    localStorage.setItem(USER_SLUG_KEY, slug);
}

export const GET_USER_SLUG = async ()=>{
    return await localStorage.getItem(USER_SLUG_KEY)
}

export const DELETE_USER_SLUG = async ()=>{
    await localStorage.removeItem(USER_SLUG_KEY);
}


export const SAVE_COMPANY_SLUG = slug =>{
    console.log(slug);
    localStorage.setItem(COMPANY_SLUG_KEY, slug);
}

export const GET_COMPANY_SLUG = async ()=>{
    return await localStorage.getItem(COMPANY_SLUG_KEY)
}

export const DELETE_COMPANY_SLUG = async ()=>{
    await localStorage.removeItem(COMPANY_SLUG_KEY);
}