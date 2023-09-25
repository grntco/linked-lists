class LinkedList {
    constructor(array = []) {
        this.allNodes = array;
    }

    append(value) {
        const currentLastNode = this.allNodes.find(node => node.nextNode === null);
        currentLastNode.nextNode = new Node(value);
    }


}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const newNode = new Node();

console.log(newNode);
console.log(Node.allInstances)

console.log(LinkedList.allNodes);