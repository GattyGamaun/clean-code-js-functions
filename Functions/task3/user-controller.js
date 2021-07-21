const userAuthenticator = require('./user-authenticator');
const controller = require('./thirdparty/controller');

module.exports = {
    authenticateUser: function (userName, password) {
        try {
            userAuthenticator.login(userName, password);
            controller.generateSuccessLoginResponse(userName);
        } catch {
            controller.generateFailLoginResponse();
        }
    },
};
