module.exports = {
    changeToMidnight: function (date, up) {
        const newDate = this.cloneDate(date);
        this.setMidnightDate(newDate, up);
        this.setMidnightHours(newDate);
        return newDate;
    },

    changeToMidnightUp: function (date) {
        return this.changeToMidnight(date, true);
    },

    changeToMidnightDown: function (date) {
        return this.changeToMidnight(date, false);
    },

    cloneDate: function (date) {
        return new Date(date.getTime());
    },

    correctDay(isUp) {
        const day = 1
        return isUp ? day : -day;
    },

    setMidnightDate(date, isUp) {
        date.setDate(date.getDate() + this.correctDay(isUp));
    },

    setMidnightHours(date) {
        const year = 0;
        const month = 0;
        const day = 0;
        const hours = 0;
        date.setHours(year, month, day, hours);
    }

};
