// User defined class node 
class Node {
  public next: Node | null;
  public element: number;

  constructor(element: number) { 
    this.element = element; 
    this.next = null;
  } 
}

export class LinkedList {
  public head: Node | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: number) {
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

  insertFirst(element: number) {
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

  insertAt(element: number, pozition: number) {

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
    let current: Node | null = this.head;
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