"use strict";
// let character = 'mario'
// let age = 30
// let isBlackBelt =false
// const circ = (diameter: number) => diameter * Math.PI
// console.log(circ('dd'))
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')
// names.push(1)
// names[0] = 3
// let numbers = [10, 20, 30, 40]
// numbers.push(2)
// numbers[1] = 'dd'
// let mixed = ['ken', 4, 'chun-li', 8, 9]
// mixed.push('ryu')
// mixed.push(10)
// mixed[0] = 1
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30,
// }
// ninja.age = 40
// ninja.name = 'ryu'
// ninja.age = '40'
// ninja.skills = ['fighting', 'sneaking']
// ninja = {
//     name: 'youshi',
//     belt: 'orange',
//     age: 30,
//     skills: []
// }
// let character: string
// let age: number
// let isLoggedIn: boolean
// age = 'luigi'
// age = 30
// isLoggedIn = 20
// isLoggedIn = false
// character = 'hi'
// character = 1
// let ningas: string[]
// ningas.push('shaun') //error
// ningas = ['yoshi', 'mario']
// let ningas: string[] = []
// ningas.push('hi')
// ///////////////////////
// let mixed: (string | number | boolean)[] = []
// mixed.push('hello')
// mixed.push(3)
// mixed.push(false)
// console.log(mixed)
// ///////////////////////
// let uid: string | number | boolean
// uid = '1'
// uid = 1
// uid = false
// ///////////////////////
// let ninjaOne: object
// ninjaOne = {
//     name: 'yoshi',
//     age: 30
// }
// ninjaOne = []
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }
// ninjaTwo = {} //erro
// ninjaTwo = {
//     name: 'mario',
//     age: 32,
//     beltColour: 'black',
// }
// let age: any = 25
// age = true
// console.log(age)
// age = 'hello'
// console.log(age)
// age = {name: 'luigi'}
// console.log(age)
// let mixed : any[] = []
// mixed.push(5)
// mixed.push('mario')
// mixed.push(false)
// console.log(mixed)
// let ninja:  {name: any , age: any}
// ninja = {name: 'yoshi', age: 25}
// console.log(ninja)
// ninja = {name: 25, age: 'yoshi'}
// console.log(ninja)
// function filter (arg: string): number{
//     switch(arg){
//         case 'I':
//         case 'i': 
//             return 1
//         case 'V':
//         case 'v':
//             return 5
//         case 'X':
//         case 'x':
//             return 10
//         case 'L':
//         case 'l': 
//             return 50
//         case 'C':
//         case 'c':
//             return 100
//         case 'D':
//         case 'd':
//             return 500
//         case 'M':
//         case 'm':
//             return 1000
//         default: return 0
//     }
// }
// function romanToInt(arg: string): number{
// let chars = [...arg.split('')]
// let nums: number[] = chars.map((i) => filter(i))
// for(let i = 0; i < nums.length; i++){
//     if( nums[i] < nums[i+1]){
//         nums[i] = nums[i+1] - nums[i]
//         nums[i+1] = 0
//         i++
//     }
// }
// return nums.reduce((accumulator,x)=>{
//      return accumulator + x})
// }
// console.log(romanToInt('MCMXCIV'))
// let greet = () => {
//     console.log('Hello')
// }
// greet = 'dd'
// let greet: Function
// greet = 'dd'
// greet = () =>{
//     console.log('hello')
// }
// const add = (a:number, b: number, c?: number | string ) => {
//     console.log(a + b )
//     console.log(c)
// }
// add(5,10,'11')
// const minus = (a: number, b: number): number => {
//     return a + b
// }
// const minus = (set:{a: number, b: number}): number => {
//     return set.a + set.b
// }
// type StringOrNum = string | number
// type objWithName = {any: string, uid: StringOrNum}
// const minus = (set: StringOrNum): void => {}
// const greet = (user: objWithName): void => {}
// minus(1)
// greet({any: '1', uid: 's'})
/////////////////////////////////////
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
