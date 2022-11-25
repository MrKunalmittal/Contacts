/*
    Object-oriented JavaScript


    Kunal Mittal
    Contact Page
*/
function onEvent(event,selector,callback){
    return selector.addEventListener(event,callback);
}

function getElement(selector,parent=document){
    return parent.getElementById(selector);

}

function select(selector,parent=document){
    return parent.querySelector(selector);
}

//print
function print(arg){
 console.log(arg);
}
class Contact {
    #name;
    #city;
    #email;

    constructor(name,city,email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }
    set name (name) {
       this.#name = name;
       
    }
    get name() {
        return this.#name;
    }

    set email(email) {
       
            this.#email = email;
        

    }
    get email () {
        return this.#email;
    }

    set city(city) {
       
            this.#city = city;
        
    }
    get city (){
        return this.#city;
    }
   

}

'use strict';

// import { Contacts } from './Contacts.js';
// import { select , onEvent, getElement, print} from './utilis.js';

const input = select('.input');
const button = select('.btn');
const saved = select('.info p');
const storage = select('.storage p');
const grid = select('.grid');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const contactArray = [];

onEvent('click', button, function(){
    event.preventDefault();
    if(contactArray < 15 && input.value !== ''){
        storage.innerText = "";

        contactsList();
        contactCount();

    } else if (input.value === ' ') {
        storage.innerText = 'Enter details to add !';
    } else if(contactArray.length > 5) {
        storage.innerText = ' Storage memory is full !';
    } else {
        storage.innerText = 'Invalid input';
    }
});

function contactsList() {
    // let data = input.value;
    let cleanData = input.value.split(', ');

    // let contact = new Contact(cleanData[0], cleanData[1], cleanData[2]);
    if(cleanData.length === 3) {
        if(!emailRegex.test(cleanData[2])){
            storage.innerText = 'Enter valid email';
        } else {

            let contact = new Contact(cleanData[0], cleanData[1], cleanData[2]);
            contactArray.push(contact);


            let contactBox = document.createElement("div");
            grid.appendChild(contactBox);
            contactBox.classList.add('box');
    
            let name = document.createElement("p");
            contactBox.appendChild(name);
            name.innerText = `Name:${contact.name}`;
    
            let city = document.createElement("p");
            contactBox.appendChild(city);
            city.innerText = `City:${contact.city}`;
    
            let email = document.createElement("p");
            contactBox.appendChild(email);
            email.innerText = `Email:${contact.email}`;
            
            input.value ='';
        
        } 
    } else {
        storage.innerText = 'Please Enter all the details';
    }
    
}

function contactCount() {
    saved.innerText = `contacts added:${contactArray.length}`;
}