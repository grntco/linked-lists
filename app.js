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

        }
    }

    head() {
        return this.allNodes[0];
    }

    tail() {
        return this.allNodes.find(node => node.nextNode === null);
    }


}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

LinkedList.append(value);