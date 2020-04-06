import { LinkedList } from './linked-list/linked-list';

const list = new LinkedList();

list.add(4);
list.add(5);
list.add(6);
list.printList();
list.removeElement(1);
list.printList();