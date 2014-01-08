function TurtleBlock(sprite, layer, descriptor, func, params){
    this.sprite = sprite;
    this.tracker = null;
    this.descriptor = descriptor;
    this.block_id = null;
    this.layer = layer;
    this.func = func;
    this.params = params;
    this.group = new Kinetic.Group({
        draggable: true
    });
    this.set_events();
    this.display_block();

    // set joined blocks
    this.upper_block = [];
    this.lower_block = [];
    this.param_blocks = [];
    // variable that stores tart point of drag
    this.start_drag_pos = this.get_xy();
}

TurtleBlock.prototype = {
    constructor: TurtleBlock,
    set_events: function(){
        var parent = this;
        this.group.on('click', function(){
            parent.exec_block();
        });
        this.group.on('mousedown', function(){
            parent.start_drag_pos = parent.get_xy();
        });
        this.group.on('dragstart', function(){
            parent.group.moveToTop();
        });
        this.group.on('dragmove', function(){
            //console.log('dragmove por parte de ' + parent.block_id);
            if (parent.upper_block.length == 1){
                parent.upper_block[0].lower_block = [];
                parent.upper_block = [];
            }
            if (parent.has_giving_param()){
                parent.param_blocks[0].param_blocks = [];
                parent.param_blocks = [];
            }

            var actual_pos = parent.get_xy();
            var movement = [0, 0];
            movement[0] = actual_pos[0] - parent.start_drag_pos[0];
            movement[1] = actual_pos[1] - parent.start_drag_pos[1];
            if (parent.upper_block.length > 0){
                parent.upper_block[0].group_movement(parent, movement, false);
            }
            if (parent.lower_block.length > 0){
                parent.lower_block[0].group_movement(parent, movement, false);
            }
            if (parent.param_blocks.length > 0){
                for (var i=0; i<parent.param_blocks.length; i++){
                    parent.param_blocks[i].group_movement(parent, movement, false);
                }
            }
            parent.start_drag_pos = actual_pos;
        });
        this.group.on('dragend', function(){
            //console.log('dragend por parte de ' + parent.block_id);
            var collide = parent.tracker.get_collide_obj(parent);
            for (var i=0; i<collide.length; i++){
                parent.collide_action(parent, collide[i]);
            }
        });
    },
    collide_action: function(parent, collide){
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
        if (parent.has_giving_param() && collide.has_receiver_param()){
            var giving_point = parent.get_giving_point();
            var receiver_points = collide.get_receiver_points();
            var point_distances = [];
            for (var i=0; i<receiver_points.length; i++){
                op1 = (giving_point[0] + parent.get_xy()[0]);
                op1 -= (receiver_points[i][0] + collide.get_xy()[0]);
                op2 = (giving_point[1] + parent.get_xy()[1]);
                op2 -= (receiver_points[i][1] + collide.get_xy()[1]);
                point_distances.push(Math.sqrt(Math.pow(op1, 2) + Math.pow(op2, 2)));
            }
            for (var i=0; i< point_distances.length; i++){
                if (point_distances[i] < 13.0){
                    var align_point = receiver_points[i];
                    var point = [0, 0];
                    point[0] = collide.get_xy()[0] + align_point[0] - 17;
                    point[1] = collide.get_xy()[1];
                    parent.set_xy(point);
                    collide.param_blocks[i] = parent;
                    parent.param_blocks[0] = collide;
                    break;
                }
            }
        }
        //console.log('upper dist: ' + upper_distance + ' lower dist: ' + lower_distance);
        if(upper_distance > -1){
            if (upper_distance < 13.0 && upper_distance > 0){
                var point = [];
                point.push(collide.get_xy()[0]);
                point.push(collide.get_lower_dock()[1] + collide.get_xy()[1] - 1);
                parent.set_xy(point);
                var movement = [0, 0];
                movement[0] = point[0] - parent.start_drag_pos[0];
                movement[1] = point[1] - parent.start_drag_pos[1];
                parent.group_movement(parent, movement, true);
                // make the respective joints
                if (parent.upper_block.indexOf(collide) == -1){
                    //alert('registramos');
                    parent.upper_block.push(collide);
                    collide.lower_block.push(parent);
                }
            }
        }
        if (lower_distance > -1){
            if (lower_distance < 13.0 && lower_distance > 0){
                var point = [];
                point.push(collide.get_xy()[0]);
                point.push(collide.get_xy()[1] - collide.get_height() + 5);
                parent.set_xy(point);
                var movement = [0, 0];
                movement[0] = point[0] - parent.start_drag_pos[0];
                movement[1] = point[1] - parent.start_drag_pos[1];
                parent.group_movement(parent, movement, true);
                // make the respective joints
                if (parent.lower_block.indexOf(collide) == -1){
                    parent.lower_block.push(collide);
                    collide.upper_block.push(parent);
                }
             }
        }
    },
    display_block: function(){
        this.group.add(this.sprite.group);
        this.layer.add(this.group);
    },
    exec_block: function(){
        this.func(this.params);
    },
    move_relative: function(movement){
        var x_final = this.get_xy()[0] + movement[0];
        var y_final = this.get_xy()[1] + movement[1];
        this.set_xy([x_final, y_final]);
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
        points.push(this.get_mid_left());
        points.push(this.get_mid_right());
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
    get_mid_left: function(){
        pos = this.get_xy();
        pos[1] += (this.sprite.safe_height() / 2);
        return pos;
    },
    get_mid_right: function(){
        pos = this.get_upper_right();
        pos[1] += (this.sprite.safe_height() / 2);
        return pos;
    },
    is_collide: function(point){
        min_x = this.group.getX();
        max_x = min_x + this.sprite.safe_width();
        min_y = this.group.getY();
        max_y = min_y + this.sprite.safe_height();

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
    has_giving_param: function(){
        return this.descriptor.has_giving_param();
    },
    has_receiver_param: function(){
        return this.descriptor.has_receiver_param();
    },
    get_upper_dock: function(){
        return this.descriptor.get_upper_dock();
    },
    get_lower_dock: function(){
        return this.descriptor.get_lower_dock();
    },
    get_giving_point: function(){
        return this.descriptor.get_giving_point();
    },
    get_receiver_points: function(){
        return this.descriptor.get_receiver_points();
    },
    group_movement: function(caller, movement, moved){
        //console.log('movimiento de: ' + movement);
        //console.log('id: ' + this.block_id + ' xy de: ' + this.get_xy());
        if (!moved){
            this.move_relative(movement);
            this.already_moved = false;
        }else{
            //console.log('vino de un moevimiento link');
        }
        //console.log('id: ' + this.block_id + ' xy new de: ' + this.get_xy());
        if (this.lower_block.length > 0 && this.lower_block[0] != caller){
            this.lower_block[0].group_movement(this, movement, false);
            //this.lower_block[0].collide_action(this, this.lower_block[0]);
        }
        if (this.upper_block.length > 0 && this.upper_block[0] != caller){
            this.upper_block[0].group_movement(this, movement, false);
            //this.upper_block[0].collide_action(this, this.upper_block[0]);
        }
        if (this.param_blocks.length > 0){
            for (var i=0; i<this.param_blocks.length; i++){
                if (this.param_blocks[i] != caller){
                    this.param_blocks[i].group_movement(this, movement, false);
                }
            }
        }
    },
    is_attached_block: function(block){
        if (this.param_blocks.indexOf(block)){
            return true;
        }
        return false;
    }
}
