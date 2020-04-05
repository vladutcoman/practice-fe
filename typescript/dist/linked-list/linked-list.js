"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// User defined class node 
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
    }
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
    /** Helper Methods */
    printList() {
        if (this.head === null) {
            console.log('List is empty.');
        }
        let current = this.head;
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}
exports.LinkedList = LinkedList;
