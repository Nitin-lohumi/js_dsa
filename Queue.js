class Queue {
    constructor(){
        this.arr={};
        this.front=0;
        this.rare = 0;
    }
    insert(item){
       this.arr[this.rare] =item;
       this.rare++;
       return item + "inserted";
    }
    delete(){
        const item = delete this.arr[this.front];
        
        this.front ++;
        return item;
    }
    get print(){
        return this.arr;
    }
}
const queue = new Queue();
console.log(queue.insert(7))
console.log(queue.insert(2))
console.log(queue.insert(6))
console.log(queue.insert(4))
let str = queue.print;
console.log(str);
console.log(queue.delete())
console.log(str);