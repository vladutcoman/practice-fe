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
        const newEl = new Node(element);
        if (this.head === null) {
            this.head = newEl;
            this.size++;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newEl;
        this.size++;
    }
    insertFirst(element) {
        const newEl = new Node(element);
        if (this.head === null) {
            this.head = newEl;
            this.size++;
            return;
        }
        newEl.next = this.head;
        this.head = newEl;
        this.size++;
    }
    insertAt(element, index) {
        if (index > this.size || index < 0) {
            console.log('The position is out of bound');
            return;
        }
        // handle insert first
    }
    // removeFrom(location) 
    // removeElement(element) 
    /** Helper Methods */
    printList() {
        if (this.head === null) {
            console.log('List is empty.');
            return;
        }
        let result = '';
        let current = this.head;
        while (current !== null) {
            result = `${result} ${current.element}, `;
            current = current.next;
        }
        console.log(result);
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
}
exports.LinkedList = LinkedList;
