// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    const fareMultiplier = function(num) {
        num = num *5
        return num;
    }
    return fareMultiplier
}

function fareDoubler(rate) {
    return rate * 2
}

function fareTripler(rate) {
    return rate *3;
}

function selectDifferentDrivers(selectingDrivers, func) {
    return func(selectingDrivers);
}