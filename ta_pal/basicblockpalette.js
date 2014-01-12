function BasicBlockPalette(width, height, fill_color, layer, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.init_palette(width, height, fill_color, layer);
}

BasicBlockPalette.prototype = {
    constructor: BasicBlockPalette,
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
        var sprit1 = new Sprite('block_res/basic1arg.svg', this.container.layer, true);
        sprit1.set_label('Forward', 5, 13, 19, 'Calibri', 'black');
        var block_factory1 = new BlockFactory([5, 5], sprit1, this.create_forward_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/basic1arg.svg', this.container.layer, true);
        sprit1.set_label('Backward', 5, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([120, 5], sprit1, this.create_backward_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/basic1arg.svg', this.container.layer, true);
        sprit1.set_label('Right', 5, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([235, 5], sprit1, this.create_right_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/basic1arg.svg', this.container.layer, true);
        sprit1.set_label('Left', 5, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([350, 5], sprit1, this.create_left_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('100', 25, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([5, 55], sprit1, this.create_box_block, this);
        this.container.add_block_factory(block_factory1);
    },
    create_forward_block: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 43]);
        dock_descriptor.add_param_dock([115, 25]);

        var sprit1 = new Sprite('block_res/basic1arg.svg', block.palette.container.layer, true);
        sprit1.set_label('Forward', 5, 13, 19, 'Calibri', 'black');

        var block1 = new TurtleBlock(sprit1, draw_stage.layer, dock_descriptor, forward_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block1.params[2] = block1;
        block_tracker.add_block(block1);
        block1.block_id = block_tracker.get_next_id();
        block1.set_xy(block.get_pos());
        block1.fire('mousedown');
    },
    create_backward_block: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 43]);
        dock_descriptor.add_param_dock([115, 25]);

        var sprit2 = new Sprite('block_res/basic1arg.svg', draw_stage.layer, true);
        sprit2.set_label('Backward', 5, 13, 17, 'Calibri', 'black');
        var block2 = new TurtleBlock(sprit2, draw_stage.layer, dock_descriptor, backward_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block2.params[2] = block2;
        block_tracker.add_block(block2);
        block2.block_id = block_tracker.get_next_id();
        block2.set_xy(block.get_pos());
        block2.fire('mousedown');
    },
    create_right_block: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 43]);
        dock_descriptor.add_param_dock([115, 25]);

        var sprit3 = new Sprite('block_res/basic1arg.svg', draw_stage.layer, true);
        sprit3.set_label('Right', 5, 13, 19, 'Calibri', 'black');
        var block3 = new TurtleBlock(sprit3, draw_stage.layer, dock_descriptor, right_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block3.params[2] = block3;
        block_tracker.add_block(block3);
        block3.block_id = block_tracker.get_next_id();
        block3.set_xy(block.get_pos());
        block3.fire('mousedown');
    },
    create_left_block: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_upper_dock([17, 1]);
        dock_descriptor.add_lower_dock([17, 43]);
        dock_descriptor.add_param_dock([115, 25]);

        var sprit4 = new Sprite('block_res/basic1arg.svg', draw_stage.layer, true);
        sprit4.set_label('Left', 5, 13, 19, 'Calibri', 'black');
        var block4 = new TurtleBlock(sprit4, draw_stage.layer, dock_descriptor, left_block, null, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block4.params[2] = block4;
        block_tracker.add_block(block4);
        block4.block_id = block_tracker.get_next_id();
        block4.set_xy(block.get_pos());
        block4.fire('mousedown');
    },
    create_box_block: function(block){
        block.end_event();

        var draw_stage = block.palette.global_tracker.get_var('draw_stage');
        var block_tracker = block.palette.global_tracker.get_var('block_tracker');

        var dock_descriptor = new DockDescriptor();
        dock_descriptor.add_param_dock([17, 25]);

        var sprit4 = new Sprite('block_res/box.svg', draw_stage.layer, true);
        sprit4.set_label('100', 25, 13, 19, 'Calibri', 'black');
        var block4 = new TurtleBlock(sprit4, draw_stage.layer, dock_descriptor, text_block, get_number, [draw_stage.turtle, draw_stage.draw_tracker, null]);
        block4.params[2] = block4;
        block_tracker.add_block(block4);
        block4.block_id = block_tracker.get_next_id();
        block4.set_xy(block.get_pos());
        block4.fire('mousedown');
    }
}
