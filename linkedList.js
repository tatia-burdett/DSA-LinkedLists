class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedLists {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item) {
    
  }

  remove(item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }
    let currNode = this.head
    let previousNode = this.head
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }

  find(item) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      }
      else {
        currNode = currNode.next
      }
    }
    return currNode
  }
}

function main() {
  let SLL = new LinkedLists()
  SLL.insertFirst('Apollo')
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Husker')
  SLL.insertFirst('Starbuck')

  SLL.insertLast('Tauhida')

  SLL.remove('Husker')
  
  console.log(SLL)
}

console.log(main())