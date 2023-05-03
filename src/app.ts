// const anchor = document.querySelector('a')!
// if(anchor){
//     console.log(anchor.href)
// }
// console.log(anchor.href)
// const form = document.querySelector('form')!
// console.log(form.children)


// interface IsPerson {
//     name: string
//     age: number
//     speak(a: string): void
//     spend(a: number): number
// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string):void{
//         console.log(text)
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount)
//         return amount
//     }
// }

// console.log(me)

// const greetPerson = (person: IsPerson) => {
//     // console.log('Hello', person.name)
// }

// greetPerson(me)

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)


// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('lougi', 'work on the lougi website', 300)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)

// invOne.client = 'yoshi'
// invOne.amount = 400

// console.log(invOne)


// invoices.forEach(inv => {
    // console.log(inv.client, inv.amount, inv.format())
    // })
    
//import
import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
// //input
const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let doc: HasFormatter
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
})

console.log('hello')


//GENERICS

const addUID = <T extends {name: string} | object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid}
}

let docOne = addUID({name: 'yoshi', age: 40})
// let docTwo = addUID('hello')

console.log(docOne.name)

interface Resource <T>{
    uid: number
    resourceName: ResourceName
    data: T
}

enum ResourceName { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}


const docThree: Resource<string> = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: 'stirn'
}
const docFour: Resource<object> = {
    uid: 5,
    resourceName: ResourceName.FILM,
    data: {name: 'Alan'}
}
const docFive: Resource<string[]> = {
    uid: 5,
    resourceName: ResourceName.PERSON,
    data: ['bread', 'milk', 'toilet roll']
}
console.log(docFive)

//обычный массив
let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yoshi'
arr = [30, false, 'yoshi']

// tuples или кортеж
let tup: [string, number, boolean] = ['ryu', 25, true]
tup[0] = 'ddd'
tup[1] = 30

