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
        let tempNode = this.headNode;
        this.headNode = newNode;
        newNode.nextNode = tempNode;
    }

    size() {
        let count = 0;
        let currentNode = this.headNode;
        while(currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
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
        if (index < 0) throw new Error('Invalid index.');
        let count = 0;
        let currentNode = this.headNode;
        while (currentNode) {
            if (count === index) {
                return currentNode
            } else if (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                count++;
            } else {
                throw new Error('Node not in list');
            }
        }
    }

    pop() {
        if (!this.headNode) {
            throw new Error('List is already empty.')
        } else {
            let currentNode = this.headNode;
            let previousNode = null;
            while (currentNode.nextNode) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            if (previousNode) {
                previousNode.nextNode = null
            } else {
                this.headNode = null;
            }
        };
    }

    contains(value) {
        if (!this.headNode) {
            return false;
        } else {
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
    }

    find(value) {
        if (!this.headNode) {
            throw new Error ('The list is empty.')
        } else {
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

        if (index === 0) {
            this.prepend(value);
        } else {
            let currentNode = this.headNode;
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
        if (!this.headNode) throw new Error('List is already empty.')
        if (index < 0) throw new Error('Invalid index');

        let currentNode = this.headNode;
        if (index === 0) {
            this.headNode = currentNode.nextNode;
        } else {
            let count = 0;
            while (count !== index - 1 && currentNode.nextNode) {
                count++;
                currentNode = currentNode.nextNode;
            }
            if (currentNode.nextNode) {
                currentNode.nextNode = currentNode.nextNode.nextNode;
            } else {
                throw new Error('Unable to remove node at given index.')
            }
        }
    }
}


// "Tests" with console outputs

const myList = new LinkedList();

myList.prepend('Salvor');
myList.append('Gaal');
myList.append('Hober');
myList.prepend('Hari');

console.log(myList.size()); // 4
console.log(myList.tail()); // { value: 'Hober', nextNode: null }
console.log(myList.head()); // { value: 'Hari', nextNode: Node { value: 'Salvor', nextNode: Node { value: 'Gaal', nextNode: [Node] } } }
console.log(myList.at(2)) // { value: 'Gaal', nextNode: Node { value: 'Hober', nextNode: null } }
myList.pop()

console.log(myList.contains('Hari')); // true
console.log(myList.contains('Hober')); // false
console.log(myList.find('Salvor')); // 1
console.log(myList.toString()); // ( Hari ) -> ( Salvor ) -> ( Gaal ) -> null

myList.insertAt('Hober', 2);
myList.removeAt(1);
console.log(myList.toString()) // ( Hari ) -> ( Hober ) -> ( Gaal ) -> null