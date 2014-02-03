function BlockFactory(pos, sprite, block_name, palette){
    this.pos = pos;
    this.group = null;
    this.sprite = sprite;
    this.block_name = block_name;
    this.palette = palette;
    this.init_factory();
}

BlockFactory.prototype = {
    constructor: BlockFactory,
    init_factory: function(){
        var parent = this;
        this.group = new Kinetic.Group({
            x: this.pos[0],
            y: this.pos[1],
            draggable: false
        });
        this.group.add(this.sprite.group);
        this.group.on('mousedown', function(){
            parent.make_block(parent.block_name);
        });
    },
    get_sprite: function(){
        return this.sprite;
    },
    fire: function(evt){
        this.group.fire(evt);
    },
    end_event: function(){
        this.fire('mouseup');
    },
    get_pos: function(){
        return this.pos;
    },
    make_block: function(name){
        this.end_event();
        var draw_stage = this.palette.global_tracker.get_var('draw_stage');
        var block_tracker = this.palette.global_tracker.get_var('block_tracker');
        var dock_tracker = this.palette.global_tracker.get_var('dock_tracker');
        var block_descriptor = this.palette.pal_desc.descriptors[name];

        var dock_descriptor = dock_tracker.get_dock(block_descriptor.dock_desc);

        var sprit1 = new Sprite(block_descriptor.block_img, this.palette.container.layer, true);
        for (var i=0; i<block_descriptor.labels.length; i++){
            this.make_label(sprit1, block_descriptor.labels[i]);
        }
        var block1 = new TurtleBlock(sprit1, draw_stage.layer, dock_descriptor, block_descriptor.callback_func, block_descriptor.value_func, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block1.params[2] = block1;
        block_tracker.add_block(block1);
        block1.block_id = block_tracker.get_next_id();
        block1.set_xy(this.get_pos());
        block1.fire('mousedown');
    },
    make_label: function(sprit, label){
        sprit.set_label(label['value'], label['x'], label['y'], label['font_size'], label['font_type'], label['font_color']);
    }
}
