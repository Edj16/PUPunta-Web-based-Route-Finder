class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // Add a node with its priority (distance)
    enqueue(node, priority) {
        this.values.push({ node, priority });
        this.bubbleUp();
    }

    // Remove and return the minimum priority node
    dequeue() {
        if (this.values.length === 0) return null;
        
        const min = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        
        return min;
    }

    // Move a newly added element up to its correct position
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];

            if (element.priority >= parent.priority) break;
            
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    // Move the root element down to its correct position
    bubbleDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    // Check if queue is empty
    isEmpty() {
        return this.values.length === 0;
    }

    // Update priority of a node if it exists and is higher
    updatePriority(node, newPriority) {
        const index = this.values.findIndex(x => x.node === node);
        if (index !== -1 && this.values[index].priority > newPriority) {
            this.values[index].priority = newPriority;
            this.bubbleUp();
            return true;
        }
        return false;
    }
}

export default PriorityQueue; 