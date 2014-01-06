function BlockTracker(){
    this.blocks = [];
}

BlockTracker.prototype = {
    constructor: BlockTracker,
    add_block: function(block){
        this.blocks.push(block);
    }
}
