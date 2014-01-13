function PenPalette(width, height, fill_color, layer, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.init_palette(width, height, fill_color, layer);
}
PenPalette.prototype = {
    constructor: PenPalette,
    init_palette: function(width, height, fill_color, layer){
        this.container = new PaletteContainer(width, height, fill_color, layer);
        this.make_block_factories();
    },
    show: function(){
        this.container.show();
    },
    hide: function(){
        this.container.hide();
    },
    is_visible: function(){
        return this.container.is_visible();
    },
    is_collide: function(point){
        return this.container.is_collide(point);
    },
    make_block_factories: function(){
        var sprit1 = new Sprite('block_res/basic.svg', this.container.layer, true);
        sprit1.set_label('Pen up', 5, 13, 19, 'Calibri', 'black');
        var block_factory1 = new BlockFactory([5, 5], sprit1, this.create_penup_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/basic.svg', this.container.layer, true);
        sprit1.set_label('Pen Down', 5, 13, 18, 'Calibri', 'black');
        block_factory1 = new BlockFactory([120, 5], sprit1, this.create_pendownd_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/basic1arg.svg', this.container.layer, true);
        sprit1.set_label('Set pen size', 5, 13, 14, 'Calibri', 'black');
        block_factory1 = new BlockFactory([235, 5], sprit1, this.create_spen_size, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('pen s', 25, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([5, 55], sprit1, this.create_psize_val, this);
        this.container.add_block_factory(block_factory1);
    },
    create_penup_block: function(block){
        block.end_event();
        
        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 35]);
        var sprit1 = new Sprite('block_res/basic.svg', block.palette.container.layer, true);
        sprit1.set_label('Pen up', 5, 13, 19, 'Calibri', 'black');

        var block1 = new TurtleBlock(sprit1, draw_stage.layer, dock_descriptor, penup_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block1.params[2] = block1;
        block_tracker.add_block(block1);
        block1.block_id = block_tracker.get_next_id();
        block1.set_xy(block.get_pos());
        block1.fire('mousedown');
    },
    create_pendownd_block: function(block){
        block.end_event();
        
        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 35]);

        var sprit1 = new Sprite('block_res/basic.svg', block.palette.container.layer, true);
        sprit1.set_label('Pen Down', 5, 13, 18, 'Calibri', 'black');

        var block1 = new TurtleBlock(sprit1, draw_stage.layer, dock_descriptor, pendown_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block1.params[2] = block1;
        block_tracker.add_block(block1);
        block1.block_id = block_tracker.get_next_id();
        block1.set_xy(block.get_pos());
        block1.fire('mousedown');
    },
    create_spen_size: function(block){
        block.end_event();
        
        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 43]);
        dock_descriptor.add_param_dock([115, 25]);

        var sprit1 = new Sprite('block_res/basic1arg.svg', block.palette.container.layer, true);
        sprit1.set_label('Set pen size', 5, 13, 14, 'Calibri', 'black');

        var block1 = new TurtleBlock(sprit1, draw_stage.layer, dock_descriptor, set_pen_size_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block1.params[2] = block1;
        block_tracker.add_block(block1);
        block1.block_id = block_tracker.get_next_id();
        block1.set_xy(block.get_pos());
        block1.fire('mousedown');
    },
    create_psize_val: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_param_dock([17, 25]);

        var sprit4 = new Sprite('block_res/box.svg', draw_stage.layer, true);
        sprit4.set_label('3', 25, 13, 19, 'Calibri', 'black');
        var block4 = new TurtleBlock(sprit4, draw_stage.layer, dock_descriptor, text_block, get_number, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block4.params[2] = block4;
        block_tracker.add_block(block4);
        block4.block_id = block_tracker.get_next_id();
        block4.set_xy(block.get_pos());
        block4.fire('mousedown');
    }
}

