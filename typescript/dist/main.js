"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list/linked-list");
const list = new linked_list_1.LinkedList();
list.add(4);
list.add(5);
list.add(6);
list.add(6);
list.printList();
list.reverseList();
list.printList();
