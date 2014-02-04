function BlockTracker(){
    this.blocks = [];
    this.id = 0;
    this.hide = false;
    this.palette_tracker = null;
}

BlockTracker.prototype = {
    constructor: BlockTracker,
    add_block: function(block){
        this.blocks.push(block);
        block.tracker = this;
    },
    get_collide_obj: function(caller){
        var points = caller.get_collide_points();
        var collide_obj = [];
        var palette = this.palette_tracker.get_visible_palette();
        if (palette != null){
            for (var s=0; s<points.length; s++){
                if (palette.is_collide(points[s])){
                    caller.chain_delete();
                    return collide_obj;
                }
            }
        }
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
        if (this.blocks.length == 0){
            return;
        }
        this.hide = true;
        for (var i=0; i<this.blocks.length; i++){
            this.blocks[i].hide();
        }
    },
    show_blocks: function(){
        if (this.blocks.length == 0){
            return;
        }
        this.hide = false;
        for (var i=0; i<this.blocks.length; i++){
            this.blocks[i].show();
        }
    },
    set_palette_tracker: function(palette_tracker){
        this.palette_tracker = palette_tracker;
    },
    remove_block: function(block){
        var block_index = this.blocks.indexOf(block);
        this.blocks.splice(block_index, 1);
    },
    get_block: function(id){
        var block = null;
        for (var i=0; i<this.blocks.length; i++){
            if (this.blocks[i].block_id == id){
                block = this.blocks[i];
                break;
            }
        }
        return block;
    }
}
