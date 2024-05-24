class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null){
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
 
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            let node = new Node(element);
            let curr, prev;
 
            curr = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;
            return curr.element;
        }
    }
    removeElement(element) {
        let current = this.head;
        let prev = null;
        while (current !=null){
            if (current.element === element) {
                if(prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
   
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        console.log(this.size);
    }
    printList() {
        let curr = this.head;
        while (curr) {
            console.log(curr.element);
            console.log(" ");
            curr = curr.next;
        }
    }
 
}
let list = new LinkedList();
console.log(list.isEmpty());
list.add(100);
list.add(200);
list.add(300);
list.add(400);
list.removeElement(200);
list.printList();