function DrawTracker(layer, turtle){
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
        this.points.push(point[0]);
        this.points.push(point[1]);
        this.line.setPoints(this.points);
    },
    clear_canvas: function(){
        this.turtle.reset_pos();
        this.points = [];
        this.points.push(this.turtle.get_xy()[0]);
        this.points.push(this.turtle.get_xy()[1]);
        this.line.setPoints(this.points);
    }
}
