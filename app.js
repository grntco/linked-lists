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

    insertAt(value, index) {
        if (index < 0) throw new Error('Invalid index');

        let currentNode = this.headNode;
        if (index === 0) {
            const newNode = new Node(value, currentNode);
            this.headNode = newNode;
        } else {
            let count = 0;
            while(count !== index - 1) {
                if (currentNode.nextNode) {
                    count++;
                    currentNode = currentNode.nextNode;
                } else {
                    throw new Error('Unable to insert new node at given index.'); 
                }
            }
            const newNode = new Node(value, currentNode.nextNode);
            currentNode.nextNode = newNode;
        }
    }

    removeAt(index) {
        if (index < 0) throw new Error('Invalid index');

        let currentNode = this.headNode;
        if (index === 0) {
            this.headNode = currentNode.nextNode;
        } else {
            let count = 0;
            while (count !== index - 1) {
                if (currentNode.nextNode) {
                    count++;
                    currentNode = currentNode.nextNode;
                } else {
                    throw new Error('Unable to remove node at given index.')
                }
            }
            currentNode.nextNode = currentNode.nextNode?.nextNode;
            // Not ideal. Fix this nonsense above
        }
    }
}

const myList = new LinkedList();


myList.prepend('Salvor');
myList.append('Gaal');
myList.append('The Mule');
myList.prepend('Hari');

console.log(myList.toString()); // Hari, Salvor, Gaal, The Mule, null
// console.log(myList.size()); // 4
// console.log(myList.head(), myList.tail()); // Hari, The Mule
myList.removeAt(-1);
console.log(myList.toString());