const MIDNIGHT_HOURS = 0;
const MIDNIGHT_MINUTES = 0;
const MIDNIGHT_SECONDS = 0;
const MIDNIGHT_MS = 0;

function cloneDate (date) {
    return new Date(date.getTime());
}

function changeToMidnight (date, up) {
    const clonedDate = cloneDate(date);
    setMidnightDate(clonedDate, up);
    setMidnightHours(clonedDate);
    return clonedDate;
}

function setMidnightDate(date, dayShift) {
    date.setDate(date.getDate() + dayShift);
}

function setMidnightHours(date) {
    date.setHours(MIDNIGHT_HOURS, MIDNIGHT_MINUTES, MIDNIGHT_SECONDS, MIDNIGHT_MS);
}

module.exports = {
    changeToMidnightUp: function (date) {
        return changeToMidnight(date, 1);
    },

    changeToMidnightDown: function (date) {
        return changeToMidnight(date, -1);
    },
};
