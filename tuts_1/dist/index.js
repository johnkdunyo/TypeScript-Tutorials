"use strict";
// data types
const id = 1;
const fistName = 'john';
const isRegistered = true;
const address = '122434';
const ids = [1, 2, 3, 4, 5];
const arr = [1, 'jiji', false];
const person = [1, 'john', false];
// union
const homeAddress = '1233434';
// enus
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); //this should print 0
// objects
const user = {
    id: 1,
    name: 'john'
};
const student1 = {
    id: 8,
    name: 'john',
    canGraduate: false
};
// type assertion
let pid = 9;
let pid1 = pid;
let pid2 = pid;
// fucntions
// x is number, y is number and return is void
const addNums = (x, y) => {
    return x + y;
};
// classswes
class Person {
    constructor(id, name) {
        console.log('constructor runnig with ' + id);
        this.id = id;
        this.name = name;
    }
}
const pers1 = new Person(6, 'koff');
