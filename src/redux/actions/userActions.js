export const AUTH = "AUTHENTICATION";
export const AUTHLOGOUT = "AUTHORLOGOUT";


export const Auth = (userInfo) => ({
  type: AUTH,
  payload: userInfo 
})

export const AuthLogout = (payload) => ({
  type: AUTHLOGOUT,
  auth: payload
})