class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let currentNode = this.headNode;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let currentNode = this.headNode;
            this.headNode = newNode;
            newNode.nextNode = currentNode;
        }
    }

    size() {
        if (!this.headNode) {
            return 0;
        } else {
            let count = 1;
            let currentNode = this.headNode;
            while(currentNode.nextNode) {
                count++;
                currentNode = currentNode.nextNode;
            }
            return count;
        }
    }

    head() {
        return this.headNode;
    }

    tail() {
        if (!this.headNode) {
            return null;
        } else {
            let currentNode = this.headNode;
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }

    at(index) {
        if (index < 0) return 'Invalid index.';
        if (index === 0) {
            return this.headNode;
        } else {
            let count = 0;
            let currentNode = this.headNode;
            while (currentNode.nextNode) {
                if (count === index) {
                    return currentNode
                } else {
                    currentNode = currentNode.nextNode;
                    count++;
                }
            }
            if (index > count) {
                return 'Node not in list';
            } else {
                return currentNode;
            }
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


console.log(myList.at(2));
// myList.prepend