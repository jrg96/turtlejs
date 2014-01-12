function BlockTracker(){
    this.blocks = [];
    this.id = 0;
    this.hide = false;
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
    },
    get_next_id: function(){
        this.id += 1;
        return this.id;
    },
    get_starter_blocks: function(){
        var starter_blocks = [];
        for (var i=0; i<this.blocks.length; i++){
            if (this.blocks[i].is_start_block()){
                starter_blocks.push(this.blocks[i]);
            }
        }
        return starter_blocks;
    },
    are_blocks_visible: function(){
        return this.hide;
    },
    hide_blocks: function(){
        this.hide = true;
        for (var i=0; i<this.blocks.length; i++){
            this.blocks[i].hide();
        }
    },
    show_blocks: function(){
        this.hide = false;
        for (var i=0; i<this.blocks.length; i++){
            this.blocks[i].show();
        }
    }
}
