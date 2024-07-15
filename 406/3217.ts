class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const set = new Set(nums)
  let dummy = new ListNode()
  let prev = dummy
  dummy.next = head

  let cur = head

  while (cur) {
    if (set.has(cur.val)) {
      prev.next = cur.next
    } else {
      prev = cur
    }

    cur = cur.next
  }

  return dummy.next
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
console.log(modifiedList([1, 2, 3], head))
