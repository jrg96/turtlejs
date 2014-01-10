function BlockFactory(pos, sprite, callback_func, palette){
    this.pos = pos;
    this.group = null;
    this.sprite = sprite;
    this.callback_func = callback_func;
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
            parent.callback_func(parent);
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
    }
}
