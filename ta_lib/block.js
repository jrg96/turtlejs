function TurtleBlock(sprite, layer, func, params){
    this.sprite = sprite;
    this.tracker = null;
    this.descriptor = null;
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
        this.group.on('dragend', function(){
            var collide = parent.tracker.get_collide_obj(parent);
            if (collide != null){
                var upper_distance = -1;
                var lower_distance = -1;
                var op1 = -1;
                var op2 = -1;
                
                if (parent.has_upper_dock() && collide.has_lower_dock()){
                    op1 = (parent.get_upper_dock()[0] + parent.get_xy()[0]);
                    op1 -= (collide.get_lower_dock()[0] + collide.get_xy()[0]);
                    op2 = (parent.get_upper_dock()[1] + parent.get_xy()[1]);
                    op2 -= (collide.get_lower_dock()[1] + collide.get_xy()[1]);
                    upper_distance = Math.sqrt(Math.pow(op1, 2) + Math.pow(op2, 2));
                }
                if (parent.has_lower_dock() && collide.has_upper_dock()){
                    op1 = (parent.get_lower_dock()[0] + parent.get_xy()[0]); 
                    op1 -= (collide.get_upper_dock()[0] + collide.get_xy()[0]);
                    op2 = (parent.get_lower_dock()[1] + parent.get_xy()[1]);
                    op2 -= (collide.get_upper_dock()[1] + collide.get_xy()[1]);
                    lower_distance = Math.sqrt(Math.pow(op1, 2) + Math.pow(op2, 2));
                }
                alert('upper: ' + upper_distance + ' y lower: ' + lower_distance);
                if(upper_distance > -1){
                    if (upper_distance < 9.0){
                        var point = [];
                        point.push(collide.get_xy()[0]);
                        point.push(collide.get_lower_dock()[1] + collide.get_xy()[1]);
                        alert(point);
                        parent.set_xy(point);
                    }
                }
                if (lower_distance > -1){
                    if (lower_distance < 9.0){
                        var point = [];
                        point.push(collide.get_xy()[0]);
                        point.push(
                          collide.get_xy()[1] - collide.get_height() + 3);
                        alert(point);
                        parent.set_xy(point);
                    }
                }
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
    set_xy: function(point){
        this.group.setX(point[0]);
        this.group.setY(point[1]);
    },
    get_xy: function(){
        var pos = [this.group.getX(), this.group.getY()];
        return pos;
    },
    get_collide_points: function(){
        points = [];
        points.push(this.get_upper_left());
        points.push(this.get_upper_right());
        points.push(this.get_lower_left());
        points.push(this.get_lower_right());
        points.push(this.get_upper_mid());
        points.push(this.get_lower_mid());
        return points;
    },
    get_height: function(){
        return this.sprite.safe_height();
    },
    get_upper_left: function(){
        return this.get_xy();
    },
    get_upper_right: function(){
        pos = this.get_xy();
        pos[0] += this.sprite.safe_width();
        return pos;
    },
    get_lower_left: function(){
        pos = this.get_xy();
        pos[1] += this.sprite.safe_height();
        return pos;
    },
    get_lower_right: function(){
        pos = this.get_xy();
        pos[0] += this.sprite.safe_width();
        pos[1] += this.sprite.safe_height();
        return pos;
    },
    get_upper_mid: function(){
        pos = this.get_xy();
        pos[0] += parseInt(this.sprite.safe_width() / 2);
        return pos;
    },
    get_lower_mid: function(){
        pos = this.get_lower_left();
        pos[0] += parseInt(this.sprite.safe_width() / 2);
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
    },
    has_upper_dock: function(){
        return this.descriptor.has_upper_dock();
    },
    has_lower_dock: function(){
        return this.descriptor.has_lower_dock();
    },
    get_upper_dock: function(){
        return this.descriptor.get_upper_dock();
    },
    get_lower_dock: function(){
        return this.descriptor.get_lower_dock();
    }
}
