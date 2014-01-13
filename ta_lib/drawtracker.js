function DrawTracker(layer, turtle){
    this.lines = [];
    this.pen_down = true;
    this.layer = layer;
    this.turtle = turtle;
    this.points = [];
    this.points.push(turtle.get_xy()[0]);
    this.points.push(turtle.get_xy()[1]);
    this.line = new Kinetic.Line({
        points: this.points,
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round',
        stroke: 'red',
    });
    this.layer.add(this.line);
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
            this.line = new Kinetic.Line({
                points: this.points,
                strokeWidth: 3,
                lineCap: 'round',
                lineJoin: 'round',
                stroke: 'red',
            });
            this.layer.add(this.line);
        }
    },
    clear_canvas: function(){
        this.turtle.reset_pos();
        this.points = [];
        this.points.push(this.turtle.get_xy()[0]);
        this.points.push(this.turtle.get_xy()[1]);
        this.line.setPoints(this.points);
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
    }
}
