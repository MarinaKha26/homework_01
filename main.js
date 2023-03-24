const SINGL_LIST_HEAD = {
    value: 0,
    next: null,
}
  
const DEFAULT_PARAMETERS = [1, 'two', () => console.log('hello'), true]
  
function createSinglListNode(value) {
const newNode =  {
    value: value,
    next: null,
}
 return newNode
}
  
function addSinglListNode(head, value) {
let currentNode = head
while (currentNode.next !== null) {
    currentNode = currentNode.next
}
    currentNode.next = createSinglListNode(value)
}
  
DEFAULT_PARAMETERS.forEach((el) => addSinglListNode(SINGL_LIST_HEAD, el))
  
console.log(SINGL_LIST_HEAD.next.value)
console.log(SINGL_LIST_HEAD.next.next.next.value)