class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
    
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            throw new Error('Index out of bounds');
        }else if(index === 0){
            this.prepend(value);
        }else{
            const node = new Node(value)
        }

    }
}