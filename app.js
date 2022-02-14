function getRandomNumber(min, max) {
//TODO
//min - minimal value
//max - max value
//Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
//if min > max then you should swap values
//swap should be without additional variable in one line code
if (min > max) {
        [max, min] = [min, max];
}
return   Math.round( min + Math.random() * (max - min));
}
for (let i = 0; i < 10; i++) {
        console.log(getRandomNumber(13,10))
}

function concatinate(prefix) {
        //TODO
        //  that by using the following code
//   const concatApp = concatinate('App - ');
//    const concatMessage = concatApp('Test status: Done');
//     console.log(concatMessage); 
//     there should be displayed out App - Test status: Done
return (...args) => [prefix, ...args].join('')
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done', "  good", ' very');
console.log(concatMessage)


function getRandomNumber(min, max) {
        //TODO
        //min - minimal value
        //max - max value
        //Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
        //if min > max then you should swap values
        //swap should be without additional variable in one line code
        if (min > max) {
                [max, min] = [min, max];
        }
        return   Math.round( min + Math.random() * (max - min));
        }
        for (let i = 0; i < 10; i++) {
                console.log(getRandomNumber(13,10))
        }
        
function concatinate(prefix) {
        //TODO
        //  that by using the following code
        //   const concatApp = concatinate('App - ');
        //    const concatMessage = concatApp('Test status: Done');
        //     console.log(concatMessage); 
        //     there should be displayed out App - Test status: Done
        return (...args) => [prefix, ...args].join('')
}
        const concatApp = concatinate('App - ');
        const concatMessage = concatApp('Test status: Done', "  good", ' very');
        console.log(concatMessage)
        
        
        