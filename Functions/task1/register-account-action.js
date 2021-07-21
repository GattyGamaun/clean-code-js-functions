const WrongAccountNameException = require('./thirdparty/wrong-account-name-exception');
const WrongPasswordException = require('./thirdparty/wrong-password-exception');

const MIN_NAME_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 8;
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
        if (account.name.length <= MIN_NAME_LENGTH) {
            throw new WrongAccountNameException(account.name);
        }
    }

    isNotValid(password) {
        return password.length <= MIN_PASSWORD_LENGTH
            || this.passwordChecker.validate(password) !== this.passwordChecker.result.OK;
    }

    validatePassword(password) {
        if (this.isNotValid(password)) {
            throw new WrongPasswordException();
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
