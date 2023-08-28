const passwordUtils = require('../security/password')

class User {
    constructor(username, password, email) {
        this.username = username
        this.password = password
        this.email = email
    }
}

const CreateUser = (username, password, email) => {
    // user field validations
    // salt and hash password
    let hashedPassword = passwordUtils.hashPassword(password)
    let hashedAgain = passwordUtils.hashPassword(password)
    let isValidPassword = passwordUtils.comparePassword(password, hashedAgain)
    let user = new User(username, hashedPassword, email)
    // call DAL to persist user
}
const GetUser = () => {

}
const UpdateUser = () => {

}

module.exports = {
    CreateUser,
    GetUser,
    UpdateUser
}