function BlockTracker(){
    this.blocks = [];
}

BlockTracker.prototype = {
    constructor: BlockTracker,
    add_block: function(block){
        this.blocks.push(block);
        block.tracker = this;
    },
    get_collide_obj: function(caller){
        collide_obj = null;
        for (var i=0; i<this.blocks.length; i++){
            if (this.blocks[i] == caller){
                continue;
            }

            if (this.blocks[i].is_collide(caller.get_xy())){
               collide_obj = this.blocks[i];
               break;
            }
        }
        return collide_obj;
    }
}
