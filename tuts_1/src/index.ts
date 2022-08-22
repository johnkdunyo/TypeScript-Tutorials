// data types

const id: number = 1
const fistName: string = 'john'
const isRegistered: boolean = true

const address: any = '122434'


const ids: number[] = [1,2,3,4,5]
const arr: any[] = [1, 'jiji', false]
const person: [number, string, boolean] = [1, 'john', false]

// union

const homeAddress: string | number = '1233434'

// enus
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}


console.log(Direction1.Up)   //this should print 0


// objects

const user : { id: number, name:string} = {
    id: 1,
    name: 'john'
}


// or you use an interface

type student = {
    id: number,
    name: string,
    canGraduate: boolean
}

const student1: student = {
    id: 8,
    name: 'john',
    canGraduate: false
}


// type assertion
let pid: any = 9

let pid1 = <number>pid
let pid2 = pid as string


// fucntions
// x is number, y is number and return is void
const addNums = (x: number, y: number): number  => {
    return x+y
}


// classswes
class Person {
    id: number
    name: string


    constructor(id: number, name: string) {
        console.log('constructor runnig with ' + id)
        this.id = id
        this.name = name
    }

    
}


const pers1 = new Person(6, 'koff')