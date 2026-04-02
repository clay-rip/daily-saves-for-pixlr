let fakeDay = Math.floor(Math.random() * 10000) + 1000;

const nativeUTC = Date.UTC;
Date.UTC = function(year, month, day) {
    if (arguments.length === 3) {
        if (arguments[1] === 0 && arguments[2] === 0) {
            return 0; 
        }
        return fakeDay * 86400000;
    }
    return nativeUTC.apply(this, arguments);
};

setInterval(() => {
    fakeDay++;
}, 2000);
