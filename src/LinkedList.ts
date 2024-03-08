import { Sortable, Sorter } from './Sorter';

class MyNode {
  next: MyNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: MyNode | null = null;
  print(): void {
    if (!this.head) {
      return;
    }
    let node: MyNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  compare(leftIndx: number, rightIndx: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }
    return this.at(leftIndx).data > this.at(rightIndx).data;
  }
  swap(leftIndx: number): void {
    if (!this.head) {
      throw new Error('List is empty');
    }
    let temp = this.at(leftIndx).data;
    this.at(leftIndx).data = this.at(leftIndx + 1).data;
    this.at(leftIndx + 1).data = temp;
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
  add(data: number): void {
    const node = new MyNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }
  at(index: number): MyNode {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: MyNode | null = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }
}
