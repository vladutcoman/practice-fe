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
      newEl.next = this.head;
    }
    const prevHead = this.head;
    this.head = newEl;
    newEl.next = prevHead;
    this.size++;
  }

  insertAt(element: number, pozition: number) {
    if (pozition < 0 || pozition > this.size) {
      console.log('Out of bound');
      return;
    }
    if (this.head === null || pozition === 0) {
      this.insertFirst(element);
      return;
    }
    const newEl = new Node(element);
    let index = 0;
    let previous: Node | null = this.head;
    let current: Node | null = this.head;
    while (index !== pozition) {
      previous = current;
      current = current!.next;
      index++;
    }
    previous!.next = newEl;
    newEl.next = current;
  }

  removeFrom(pozition: number) {
    if (this.head === null) {
      console.log('List is empty');
      return;
    }
    if (pozition < 0 || pozition >= this.size) {
      console.log('Out of bound');
      return;
    }
    if (pozition === 0) {
      this.head = this.head.next;
      this.size--;
    }
    let index = 0;
    let current: Node | null = this.head;
    let previous = null;
    while (index < pozition) {
      previous = current;
      current = current!.next;
      index++;
    }
    previous!.next = current!.next;
    this.size--;
  } 
  
  removeElement (element: number) {
    if (this.head === null) {
      console.log('Empty list');
      return;
    }
    if (this.head.element === element) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current: Node | null = this.head;
    let previous = null;
    let found = false;
    while (current !== null) {
      if (current!.element === element) {
        found = true;
        break;
      }
      previous = current;
      current = current.next;
    }
    if (!found) {
      console.log('Element not found');
      return;
    }
    previous!.next = current!.next;
    this.size--;
  }

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

  reverseList() {
    if (this.head === null) {
      console.log('Empty list');
      return
    }
    let previous = null;
    let current: any = this.head
    while (current !== null) {
      const changer = current.next
      current.next = previous;
      previous = current;
      current = changer;
    }
    this.head = previous
  }

}