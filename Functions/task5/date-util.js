function cloneDate (date) {
    return new Date(date.getTime());
}

function changeToMidnight (date, up) {
    const clonedDate = cloneDate(date);
    setMidnightDate(clonedDate, up);
    setMidnightHours(clonedDate);
    return clonedDate;
}

function correctDay(isUp) {
    const shift = 1
    return isUp ? shift : -shift;
}

function setMidnightDate(date, isUp) {
    date.setDate(date.getDate() + correctDay(isUp));
}

function setMidnightHours(date) {
    const year = 0;
    const month = 0;
    const day = 0;
    const hours = 0;
    date.setHours(year, month, day, hours);
}

module.exports = {
    changeToMidnightUp: function (date) {
        return changeToMidnight(date, true);
    },

    changeToMidnightDown: function (date) {
        return changeToMidnight(date, false);
    },
};
