function DrawTracker(layer, turtle){
    this.lines = [];
    this.shapes = [];
    this.pen_down = true;
    this.pen_size = 3;
    this.stroke_line = 'red';
    this.layer = layer;
    this.turtle = turtle;
    this.points = [];
    this.points.push(turtle.get_xy()[0]);
    this.points.push(turtle.get_xy()[1]);
    this.make_base_line();
}

DrawTracker.prototype = {
    constructor: DrawTracker,
    add_point: function(point){
        if (this.pen_down){
            this.points.push(point[0]);
            this.points.push(point[1]);
            this.line.setPoints(this.points);
        }else{
            this.lines.push(this.line);
            this.points = [this.turtle.get_xy()[0], this.turtle.get_xy()[1]];
            this.make_base_line();
        }
    },
    clear_canvas: function(){
        this.turtle.reset_pos();
        for (var i=0; i<this.lines.length; i++){
            this.lines[i].remove();
        }
        for (var i=0; i<this.shapes.length; i++){
            this.shapes[i].remove();
        }
        this.line.remove();
        this.lines = [];
        this.shapes = [];
        this.points = [this.turtle.get_xy()[0], this.turtle.get_xy()[1]];
        this.make_base_line();
    },
    check_repos: function(){
        if (this.points.length == 2){
            this.points[0] = this.turtle.get_xy()[0];
            this.points[1] = this.turtle.get_xy()[1];
        }
    },
    pen_up: function(){
        this.pen_down = false;
    },
    pen_down_action: function(){
        this.pen_down = true;
    },
    make_base_line: function(){
        this.line = new Kinetic.Line({
            points: this.points,
            strokeWidth: this.pen_size,
            lineCap: 'round',
            lineJoin: 'round',
            stroke: 'red'
        });
        //this.line.opacity(1.0);
        this.layer.add(this.line);
    },
    set_pen_size: function(value){
        if (this.pen_size != value){
            this.pen_size = value;
            this.lines.push(this.line);
            this.points = [this.turtle.get_xy()[0], this.turtle.get_xy()[1]];
            this.make_base_line();
        }
    },
    add_shape: function(shape){
        this.shapes.push(shape);
        this.end_line();
    },
    end_line: function(){
        if (this.points.length > 2){
            this.lines.push(this.line);
        }
        this.points = [this.turtle.get_xy()[0], this.turtle.get_xy()[1]];
        this.make_base_line();
    }
}
