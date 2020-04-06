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
            newEl.next = this.head;
        }
        const prevHead = this.head;
        this.head = newEl;
        newEl.next = prevHead;
        this.size++;
    }
    insertAt(element, pozition) {
        if (pozition < 0 || pozition > this.size) {
            console.log('Out of bound');
            return;
        }
        if (this.head === null || pozition === 0) {
            this.insertFirst(element);
            return;
        }
        const newEl = new Node(element);
        let index = 1;
        let previous = this.head;
        let current = this.head;
        while (index !== pozition) {
            previous = current;
            current = current.next;
            index++;
        }
        previous.next = newEl;
        newEl.next = current;
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
