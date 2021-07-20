const HTTP = 'http://';
const EDITABLE = '/?edit=true';
const DOMAIN = 'mysite.com';

module.exports = class SitePage {
    constructor(siteGroup, userGroup) {
        this.siteGroup = siteGroup;
        this.userGroup = userGroup;
    }

    makeParamsString(params) {
        let paramsString = '';

        for (const [key, value] of params) {
            paramsString += '&' + key + '=' + value;
        }

        return paramsString;
    }

    getEditablePageUrl(params) {
        return HTTP + DOMAIN + EDITABLE + this.makeParamsString(params) + this.getAttributes();
    }

    getAttributes() {
        return '&siteGrp=' + this.siteGroup + '&userGrp=' + this.userGroup;
    }
};
