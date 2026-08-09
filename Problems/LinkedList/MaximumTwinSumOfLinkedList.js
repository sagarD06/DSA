const pairSum = head => {
    const half = [];
    let slow = fast = head;

    while (fast && fast.next) {
        half.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    let res = 0;
    while (slow) {
        res = Math.max(res, half.pop() + slow.val);
        slow = slow.next;
    }

    return res;
};
