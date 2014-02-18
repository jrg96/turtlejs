function FlowPalette(width, height, fill_color, layer, pal_desc, global_tracker){
    this.container = null;
    this.global_tracker = global_tracker;
    this.pal_desc = pal_desc;
    this.init_palette(width, height, fill_color, layer);
}
FlowPalette.prototype = {
    constructor: FlowPalette,
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
        var sprit1 = new Sprite('block_res/clampn.svg', this.container.layer, true);
        sprit1.set_label('Repeat', 5, 13, 19, 'Calibri', 'black');
        var block_factory1 = new BlockFactory([5, 5], sprit1, 'repeat_block', this);
        this.container.add_block_factory('repeat', block_factory1);
    }
}

