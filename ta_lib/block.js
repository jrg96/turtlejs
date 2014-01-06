function TurtleBlock(sprite, layer, func, params){
    this.sprite = sprite;
    this.tracker = null;
    this.collide_obj = null;
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
            parent.exec_block();
        });
        this.group.on('dragstart', function(){
            parent.group.moveToTop();
        });
        this.group.on('dragmove', function(){
        });
        this.group.on('dragend', function(){
            collide = parent.tracker.get_collide_obj(parent);
            if (collide != null){
                alert('detectamos collide!!!');
            }
        });
    },
    display_block: function(){
        this.group.add(this.sprite.group);
        this.layer.add(this.group);
    },
    exec_block: function(){
        this.func(this.params);
    },
    get_xy: function(){
        pos = [this.group.getX(), this.group.getY()];
        return pos;
    },
    is_collide: function(point){
        min_x = this.group.getX();
        max_x = min_x + this.sprite.safe_width();
        min_y = this.group.getY();
        max_y = min_x + this.sprite.safe_height();

        if ((point[0] > min_x && point[0] < max_x) && (point[1] > min_y && point[1] < max_y)){
            return true;
        }else{
            return false;
        }
    }
}
