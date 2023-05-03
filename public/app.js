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
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// //input
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
console.log('hello');
//GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello')
console.log(docOne.name);
var ResourceName;
(function (ResourceName) {
    ResourceName[ResourceName["BOOK"] = 0] = "BOOK";
    ResourceName[ResourceName["AUTHOR"] = 1] = "AUTHOR";
    ResourceName[ResourceName["FILM"] = 2] = "FILM";
    ResourceName[ResourceName["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceName[ResourceName["PERSON"] = 4] = "PERSON";
})(ResourceName || (ResourceName = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: 'stirn'
};
const docFour = {
    uid: 5,
    resourceName: ResourceName.FILM,
    data: { name: 'Alan' }
};
const docFive = {
    uid: 5,
    resourceName: ResourceName.PERSON,
    data: ['bread', 'milk', 'toilet roll']
};
console.log(docFive);
//обычный массив
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
// tuples или кортеж
let tup = ['ryu', 25, true];
tup[0] = 'ddd';
tup[1] = 30;
