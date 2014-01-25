function ColorsPalette(width, height, fill_color, layer, pal_desc, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.pal_desc = pal_desc;
    this.init_palette(width, height, fill_color, layer);
}
ColorsPalette.prototype = {
    constructor: ColorsPalette,
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
        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('red', 25, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([5, 5], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('green', 25, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([90, 5], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('purple', 25, 13, 15, 'Calibri', 'black');
        block_factory1 = new BlockFactory([175, 5], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('orange', 22, 13, 15, 'Calibri', 'black');
        block_factory1 = new BlockFactory([260, 5], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('cyan', 25, 13, 19, 'Calibri', 'black');
        block_factory1 = new BlockFactory([345, 5], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('white', 25, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([5, 55], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('yellow', 21, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([90, 55], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('blue', 25, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([175, 55], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);

        sprit1 = new Sprite('block_res/box.svg', this.container.layer, true);
        sprit1.set_label('black', 25, 13, 17, 'Calibri', 'black');
        block_factory1 = new BlockFactory([260, 55], sprit1, this.create_red_block, this);
        this.container.add_block_factory(block_factory1);
    },
    create_red_block: function(block){
    }
}

