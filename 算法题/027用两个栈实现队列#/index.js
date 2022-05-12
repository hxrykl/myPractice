/*
用两个栈实现队列

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]


*/
var CQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

CQueue.prototype.appendTail = function(value) {
    //尾部塞入
    this.stack1.push(value)
};

CQueue.prototype.deleteHead = function() {
    // 如果 stack2 中有值，直接推出
    if(this.stack2.length){
        return this.stack2.pop()
    }
    // 如果没值，从 stack1 中取值
    while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop())
    }
    // 将 stack2 中值推出，如果无值，返回 -1
    return this.stack2.pop() || -1
};


