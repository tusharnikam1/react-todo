export const ROLES  = {
    ADMIN: { key : 'ADMIN', label: 'Admin', PERMISSIONS: ['BOARDS_VIEW']},
    GUEST: { key : 'GUEST', label: 'GUEST', PERMISSIONS: ['BOARDS_VIEW']},
    AUTHENTICATED:  { key : 'AUTHENTICATED', label: 'USER', PERMISSIONS: ['BOARDS_VIEW']} 
}


export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO:'REMOVE_TODO',
    UPDATE_TODO:'UPDATE_TODO',
    USER_SIGNUP: 'USER_SIGNUP',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGIN_SUCCESS:'USER_LOGIN_SUCCESS',
    LOGGED_IN_USER: 'UserData'
}


export const CONFIGS = {
    DEFAULT_APP_PATH: '/boards'
} 