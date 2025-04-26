class QueueUsingStack {
    constructor(){
        this.inputStack = [];
        this.outputStack = [];
    }

    push(data){
        this.inputStack.push(data);
    }

    pop(){
        if(this.outputStack.length == 0){
            for(let x =0;this.inputStack.length != 0; x++){
                this.outputStack.push(this.inputStack.pop());
            }
        }
        // this.peek();
        this.outputStack.pop();
    }

    peek(){
        if(this.outputStack.length == 0){
            for(let x =0; x < this.inputStack.length; x++){
                this.outputStack.push(this.inputStack.pop());
            }
        }
        return this.outputStack[this.outputStack.length - 1];
    }
}

const queueStack = new QueueUsingStack();
queueStack.push(1);
queueStack.push(2);
queueStack.push(3);
queueStack.push(4);
queueStack.pop();
queueStack.pop();
console.log(queueStack);
