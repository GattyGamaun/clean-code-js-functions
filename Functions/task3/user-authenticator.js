const userService = require('./thirdparty/user-service');
const sessionManager = require('./thirdparty/session-manager');

const authenticator = {
    login: function (name, password) {
        return authenticator.loginUser(this.getUser(name), password);
    },

    loginUser: function (user, password) {
        this.checkIsValidUser(user, password);
        this.setUser(user);

        return user;
    },

    getUser: function (name) {
        return userService.getUserByName(name)
    },

    checkIsValidUser: function (user, password) {
        if (this.isNotValidPassword(user, password)) {
            throw new Error('Password is not valid');
        }
    },

    isNotValidPassword: function (user, password) {
        return !userService.isPasswordCorrect(user, password);
    },

    setUser: function (user) {
        sessionManager.setCurrentUser(user);
    },

};

module.exports = authenticator;
