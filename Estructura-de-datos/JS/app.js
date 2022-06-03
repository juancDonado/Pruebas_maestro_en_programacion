class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        return console.log(this.stack);
    }

    printAll(){
        this.stack.reverse().forEach((value)=>{
            return console.log('---'+value);
        });
    }
}

let stack = new Stack();

stack.push(()=>{console.log('hola')});
stack.push('Hola Mundo');
stack.push('Juan');
stack.print();
stack.printAll();
stack.pop();
stack.print();
console.log(stack.peek());
console.log(stack.size());
stack.print();


class StackObject {
    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    peek(){
        return this.stack[this.count - 1];
    }

    size(){
        return this.count;
    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count]
        return element;
    }

    print(){
        return console.log(this.stack);
    }
}

let stackObject = new StackObject();

stackObject.push('Juan');
stackObject.push(true);
stackObject.push(10);
stackObject.push(false);
stackObject.print();
console.log(stackObject.pop());
console.log(stackObject.size());
console.log(stackObject.peek());
stackObject.print();

