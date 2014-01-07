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
        var collide_obj = [];
        var points = caller.get_collide_points();
        var can_continue = true;
        for (var i=0; i<this.blocks.length; i++){
            if (this.blocks[i] == caller){
                continue;
            }
            for (var s=0; s<points.length; s++){
                if (this.blocks[i].is_collide(points[s])){
                   collide_obj.push(this.blocks[i]);
                   break;
                }
            }
        }
        return collide_obj;
    }
}
