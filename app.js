class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            this.head = newNode;
            newNode.nextNode = currentNode;
        }
    }

    size() {
        if (!this.head) {
            return 0;
        } else {
            let count = 1;
            let currentNode = this.head;
            while(currentNode.nextNode) {
                count++;
                currentNode = currentNode.nextNode;
            }
            return count;
        }
    }

    head() {
        if (!this.head) {
            return null;
        } else {
            return this.head;
        }
    }

    tail() {
        if (!this.head) {
            return null;
        } else {
            let currentNode = this.head;
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const myList = new LinkedList();


myList.prepend('Salvor');
myList.append('Gaal');
myList.prepend('Hari');
//Hari, Salvor, Gaal


console.log(myList.tail());
// myList.prepend