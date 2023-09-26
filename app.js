class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

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
            while (currentNode) {
                if (count === index) {
                    return currentNode
                } else if (currentNode.nextNode) {
                    currentNode = currentNode.nextNode;
                    count++;
                } else {
                    return 'Node not in list';
                }
            }
        }
    }

    pop() {
        if (!this.headNode) {
            return 'List is already empty.'
        } else {
            let currentNode = this.headNode;
            while (currentNode.nextNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            let poppedNode = currentNode.nextNode;
            currentNode.nextNode = null;
            return poppedNode;
        };
    }

    contains(value) {
        let currentNode = this.headNode;
        while (currentNode.value !== value) {
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            } else {
                return false;
            }
        }
        return true;
    }

    find(value) {
        let currentNode = this.headNode;
        let index = 0;
        while (currentNode.value !== value) {
            if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                index++;
            } else {
                return null;
            }
        }
        return index;
    }

    toString() {
        let listString = '';
        let currentNode = this.headNode;
        while(currentNode) {
            listString += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        listString += 'null';
        return listString;
    }
}

const myList = new LinkedList();


myList.prepend('Salvor');
myList.append('Gaal');
myList.prepend('Hari');
//Hari, Salvor, Gaal




console.log(myList.toString());
myList.prepend('The Mule');
console.log(myList.toString());
