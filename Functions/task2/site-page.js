const HTTP = 'http://';
const EDITABLE = '/?edit=true';
const DOMAIN = 'mysite.com';

module.exports = class SitePage {
    constructor(siteGroup, userGroup) {
        this.siteGroup = siteGroup;
        this.userGroup = userGroup;
    }

    getParamsString(params) {
        let paramsString = '';

        const paramsList = [...params, ...this.getAttributes()];

        for (const [key, value] of paramsList) {
            paramsString += `&${key}=${value}`;
        }

        return paramsString;
    }

    getEditablePageUrl(params) {
        const param = this.getParamsString(params);

        return `${HTTP}${DOMAIN}${EDITABLE}${param}`;
    }

    getAttributes() {
        const map = new Map();
        map.set('siteGrp', this.siteGroup);
        map.set('userGrp', this.userGroup);

        return map;
    }
};
