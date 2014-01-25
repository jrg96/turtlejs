function PenPalette(width, height, fill_color, layer, pal_desc, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.pal_desc = pal_desc;
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
        block.make_block('penup_block');
    },
    create_pendownd_block: function(block){
        block.make_block('pendown_block');
    },
    create_spen_size: function(block){
        block.make_block('set_pen_size_block');
    },
    create_psize_val: function(block){
        block.make_block('box_block');
    }
}

