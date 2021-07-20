const WrongAccountNameException = require('./thirdparty/wrong-account-name-exception');
const WrongPasswordException = require('./thirdparty/wrong-password-exception');

module.exports = class RegisterAccountAction {
    constructor() {
        this.passwordChecker = null;
        this.accountManager = null;
    }

    register(account) {
        this.isNameLengthEnough(account);
        this.isPasswordLengthEnough(account.password);
        this.setCreatedDate(account);
        this.addAddresses(account);
        this.create(account);
    }

    isNameLengthEnough(account) {
        if (account.name.length <= 5) {
            throw new WrongAccountNameException(account.name);
        }
    }

    isNotValidPassword(password) {
        return this.passwordChecker.validate(password) !== this.passwordChecker.result.OK;
    }

    checkPassword(password) {
        if (this.isNotValidPassword(password)) {
            throw new WrongPasswordException();
        }
    }

    isPasswordLengthEnough(password) {
        if (password.length <= 8) {
            this.checkPassword(password);
        }
    }

    setCreatedDate(account) {
        account.setCreatedDate(new Date());
    }

    setAddresses(account) {
        const addresses = new Set();
        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());

        return addresses;
    }

    addAddresses(account) {
        account.setAddresses(account);
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
