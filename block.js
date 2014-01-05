function TurtleBlock(sprite, layer, func, params){
    this.sprite = sprite;
    this.layer = layer;
    this.func = func;
    this.params = params;
    this.group = new Kinetic.Group({
        draggable: true
    });
    this.set_events();
    this.display_block();
}

TurtleBlock.prototype = {
    constructor: TurtleBlock,
    set_events: function(){
        var parent = this;
        this.group.on('click', function(){
            parent.func(parent.params);
        });
    },
    display_block: function(){
        this.group.add(this.sprite.group);
        this.layer.add(this.group);
    }
}
