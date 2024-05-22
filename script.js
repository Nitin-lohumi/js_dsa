"use strict";
const prompt=require("prompt-sync")();
class Stack {
    constructor(){
        this.items = [];
    }
    add(element){
        return this.items.push(element);
    }
    remove(){
    if(this.items.length > 0){
            return this.items.pop();
        }
    }
    display(){
        for(let i=this.items.length-1; i>=0; i--){
            console.log(this.items[i]);
        }
    }
}
let stack = new Stack();
console.log("displaying stack");
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
for(let i=0; i<this.items.length; i++){
    stack.pop();
}


stack.display();


