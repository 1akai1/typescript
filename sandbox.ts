
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
    // skills: []
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
//     beltColour: 'black'
// }

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