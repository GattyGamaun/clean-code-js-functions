const userAuthenticator = require('./user-authenticator');
const controller = require('./thirdparty/controller');

module.exports = {
    authenticateUser: function (userName, password) {
        this.checkValidUser(userName, password);
        this.getSuccessLoginResponse(userName)
    },

    loginUser: function (userName, password) {
        return userAuthenticator.login(userName, password);
    },

    checkValidUser: function (userName, password) {
        if (this.loginUser(userName, password) == null) {
            controller.generateFailLoginResponse();
            throw new Error('Failed login');
        }
    },

    getSuccessLoginResponse: function (userName) {
        controller.generateSuccessLoginResponse(userName);
    },
};
