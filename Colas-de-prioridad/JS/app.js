class Queue{
  constructor(){
    this.queue = [];
    this.max = 0;
    this.min;
  }

  push(element){
    this.queue.push(element);
    this.queue.sort();
    console.log(this.queue);
    return this.queue;
  }

  maxHeap(){
    this.queue.sort();
    return this.queue.pop();
  }

  minHeap(){
    this.queue.reverse();
    return this.queue.pop();
  }

  print(){
    if(this.queue.reverse()){
      this.queue.sort();
    }
    this.queue.forEach((element)=>{
      console.log(element);
    });
  }

  size(){
    return console.log(this.queue.length);
  }

  showPop(){
    for(let i = 0; i < this.queue.length; i++){
      console.log(this.queue.pop());
      if(this.queue.length == 1){
        console.log(this.queue[0]);
        this.queue.splice(0);
      }
    }  
  }
  
  swap(a, b){
    let aux = a;
    a = b;
    b = aux;

    console.log(a,b);
  }


}

let queue = new Queue();
let queue2 = new Queue();
let queue3 = new Queue();

queue.push(4);
queue.push(7);
queue.push(6);

queue2.push(2);
queue2.push(3);
queue2.push(1);

queue3.push(8);
queue3.push(5);
queue3.push(9);

queue.print();
console.log('------------');
queue2.print();
console.log('------------');
queue3.print();
console.log('------------');
queue.swap(queue, queue2);
queue2.swap(queue2, queue3);
console.log('------------');
console.log('------------');
queue.print();
console.log('------------');
queue2.print();
console.log('------------');
queue3.print();
console.log('------------');