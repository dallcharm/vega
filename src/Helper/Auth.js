class Auth {
    constructor() {
        this.authenticated = false
    }
    login(data, callback) {
        // fetch user, set JWT, user-id;
        localStorage.setItem('user-data', JSON.stringify(data.username))
        localStorage.setItem('token', data.token)
        this.authenticated = true;
        callback() // callback it's a function
    }
    logout(callback) {
        // clean storage, erase JWT, erase user data.
        localStorage.removeItem('user-data')
        localStorage.removeItem('token')
        this.authenticated = false;
        callback()
    }
    isAuthenticated(){
        // validate if the local storage data is available.
        if(localStorage.getItem('token')){
            // API call verify token
            this.authenticated = true;
        }
        return this.authenticated;
    }
}
export default new Auth()