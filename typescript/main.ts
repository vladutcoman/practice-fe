import { LinkedList } from './linked-list/linked-list';

const list = new LinkedList();

list.printList();
list.add(4);
list.printList();
console.log(list.getSize());
list.add(5);
list.insertFirst(6);
list.printList();
console.log(list.getSize());

