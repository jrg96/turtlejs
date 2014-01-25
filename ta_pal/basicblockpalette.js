function BasicBlockPalette(width, height, fill_color, layer, pal_desc, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.pal_desc = pal_desc;
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
        block.make_block('forward_block');
    },
    create_backward_block: function(block){
        block.make_block('backward_block');
    },
    create_right_block: function(block){
        block.make_block('right_block');
    },
    create_left_block: function(block){
        block.make_block('left_block');
    },
    create_box_block: function(block){
        block.make_block('box_block');
    }
}
