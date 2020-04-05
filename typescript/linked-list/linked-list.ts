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