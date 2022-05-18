/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let curr = root;
    
    while (curr != null) {
        let start = null;
        let prev = null;
    
        while (curr != null) {
            if (start == null) {
                if (curr.left) start = curr.left;
                else if (curr.right) start = curr.right;
                
                prev = start;
            }
            
            if (prev != null) {
                if (curr.left && prev != curr.left) {
                    prev = prev.next = curr.left;
                }
                if (curr.right && prev != curr.right) {
                    prev = prev.next = curr.right;
                }
            }

            curr = curr.next;
        }
		
        curr = start;
    }
    
    return root;
};