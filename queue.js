class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // * get the first element of queue
    peek(){
        return this.first;
    }

    // * insert the element in queue
    enqueue(data){
        const newElement = new Node(data);
        if(this.length === 0){
            this.first = this.last = newElement;
        } else {
            this.last.next = newElement;
            this.last = newElement;
        }
        this.length++;
    }

    // * pop element from queue
    dequeue(){
        if(!this.first){
            return;
        }
        this.first = this.first.next;
        this.length--;
        if(this.length == 0)
            this.last = null;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.enqueue(4);
myQueue.enqueue(2);
// myQueue.dequeue();

console.log("🚀 ~ myQueue:", myQueue);