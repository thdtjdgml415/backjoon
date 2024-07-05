/**
 * 더블 링크드 리스트
 * 싱글과 다르게 이전 노드에 대한 데이터도 가지고 있다.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;    
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let poppedNode = this.tail;
    if (this.tail === null) return undefined;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    let shiftedNode = this.head;
    if (this.head === null) return undefined;
    else if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      shiftedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;

    if (index <= this.length / 2) {
      let counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      this.length++;
      return true;
    } else if (index === this.length - 1) {
      this.push(val);
      this.length++;
      return true;
    } else {
      let foundPrevNode = this.get(index - 1);
      let foundNextNode = foundPrevNode.next;
      foundNextNode.prev = newNode;
      foundPrevNode.next = newNode;
      newNode.next = foundNextNode;
      newNode.prev = foundPrevNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    let foundNode = this.get(index);
    // let prevNode = foundNode.prev;
    // let nextNode = foundNode.next;
    foundNode.prev.next = foundNode.next;
    foundNode.next.prev = foundNode.prev;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
