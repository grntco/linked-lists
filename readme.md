# Linked Lists

This is a project for The Odin Project's curriculum to create a linked list using JavaScript.

The JS file includes two classes: `Node`, which is used to create the individual nodes and connect them to the next node on the list, and `LinkedList`, which contains the following methods:

1. `append(value)` adds a new node containing value to the end of the list
2. `prepend(value)` adds a new node containing value to the start of the list
3. `size` returns the total number of nodes in the list
4. `head` returns the first node in the list
5. `tail` returns the last node in the list
6. `at(index)` returns the node at the given index
7. `pop` removes the last element from the list
8. `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
9. `find(value)` returns the index of the node containing value, or null if not found.
10. `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
11. `insertAt(value, index)` that inserts a new node with the provided value at the given index.
12. `removeAt(index)` that removes the node at the given index.

The file also includes several informal "tests" by outputting the `LinkedList`'s method's return values to the console.