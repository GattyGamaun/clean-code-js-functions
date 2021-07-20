module.exports = {
    changeToMidnight: function (date, up) {
        const newDate = this.getNewDate(date);
        this.setCorrectDate(newDate, up);
        this.setCorrectHours(newDate);
        return newDate;
    },

    getNewDate: function (date) {
        return new Date(date.getTime());
    },

    correctDay(isUp) {
        return isUp ? 1 : -1;
    },

    setCorrectDate(date, isUp) {
        date.setDate(date.getDate() + this.correctDay(isUp));
    },

    setCorrectHours(date) {
        date.setHours(0, 0, 0, 0);
    }

};
