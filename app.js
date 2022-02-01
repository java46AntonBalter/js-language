/*******************************************************HW #16 task 1 */

const Deferred = function() {
    this.accArray = [];
    this.res;
}
Deferred.prototype.then = function (newFunc) {
    this.accArray.push(newFunc);
}
Deferred.prototype.resolve = function (value) {
    this.res = value;
    this.accArray.forEach(n => this.res = n(this.res));
}
    
const d = new Deferred();
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');



/*******************************************HW #16 task2 */
function MyArray(value){
    this.accArray = []; 
    this.value = value;
}
MyArray.prototype.get = function(i) {
    return this.accArray[i]? this.accArray[i] : this.value;
}
MyArray.prototype.set = function(i,v) {
    this.accArray[i] = v;
}
MyArray.prototype.setValue = function (v) {
    this.value = v;
    this.accArray = this.accArray.map(n => n = v);
}
const myArray1 = new MyArray(10);
console.log(myArray1.get(100));
myArray1.set(100, 500)//sets 500 at index 100
console.log(myArray1.get(200)) //displayed out 10
console.log(myArray1.get(100)) //displayed out 500
myArray1.setValue(300);
console.log(myArray1.get(100)) //displayed out 300
console.log(myArray1.get(200)) //displayed out 300

