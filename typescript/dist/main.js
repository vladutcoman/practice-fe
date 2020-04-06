"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list/linked-list");
const list = new linked_list_1.LinkedList();
list.add(4);
list.add(5);
list.insertAt(6, 0);
list.printList();
