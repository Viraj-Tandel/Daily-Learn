/*
 * ******* stack implememtation using Linked List *******
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.length == 0) {
      this.top = this.bottom = newNode;
      this.length++;
    } else {
      const topElement = this.top;
      this.top = newNode;
      newNode.next = topElement;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;

    if (this.top == this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
    return this;
  }

  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push("google.com");
myStack.push("facebook.com");
myStack.push("instagram.com");
myStack.pop();
myStack.pop();
myStack.pop();
// console.log("🚀 ~ myStack:", myStack.peek());

/*
 * ******* stack implememtation using Array *******
 */

class StackArray {
  constructor() {
    this.data = [];
    this.top = -1;
    this.bottom = -1;
  }

  peek() {
    return this.data[this.top];
  }

  push(element) {
    this.top++;
    this.data[this.top] = element;
    if (this.data.length == 1) {
      this.bottom++;
    }
  }

  pop() {
    if (this.top == -1) {
      return;
    }

    if (this.top == this.bottom) {
      this.bottom--;
    }

    this.data.splice(this.top, 1);
    this.top--;
  }
}

const myStackArray = new StackArray();
myStackArray.push("facebook.com");
myStackArray.push("instagram.com");
myStackArray.push("google.com");
myStackArray.pop();
myStackArray.pop();
myStackArray.pop();
myStackArray.push("github.com")
console.log("🚀 ~ myStackArray:", myStackArray);
