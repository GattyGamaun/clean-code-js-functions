const WrongAccountNameException = require('./thirdparty/wrong-account-name-exception');
const WrongPasswordException = require('./thirdparty/wrong-password-exception');

module.exports = class RegisterAccountAction {
    constructor() {
        this.passwordChecker = null;
        this.accountManager = null;
    }

    register(account) {
        this.validateName(account);
        this.validatePassword(account.password);
        this.setCreatedDate(account);
        this.setAllAddresses(account);
        this.create(account);
    }

    validateName(account) {
        const minNameLength = 5;
        if (account.name.length <= minNameLength) {
            throw new WrongAccountNameException(account.name);
        }
    }

    validatePassword(password) {
        const minPasswordLength = 8;
        const isNotValid = password.length <= minPasswordLength
            || this.passwordChecker.validate(password) !== this.passwordChecker.result.OK;
        if (isNotValid) {
            throw throw new WrongPasswordException();
        }
    }

    setCreatedDate(account) {
        account.setCreatedDate(new Date());
    }

    getAddressList(account) {
        const addresses = new Set();
        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());

        return addresses;
    }

    setAllAddresses(account) {
        account.setAddresses(this.getAddressList());
    }

    create(account) {
        this.accountManager.createNewAccount(account);
    }

    setAccountManager(accountManager) {
        this.accountManager = accountManager;
    }

    setPasswordChecker(passwordChecker) {
        this.passwordChecker = passwordChecker;
    }
};
