export const AUTH = "AUTHENTICATION";
export const AUTHLOGOUT = "AUTHORLOGOUT"

export const Auth = (payload) => ({
  type: AUTH,
  auth: payload
})

export const AuthLogout = (payload) => ({
  type: AUTHLOGOUT,
  auth: payload
})