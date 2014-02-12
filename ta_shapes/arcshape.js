function ArcShape(pos, radio, startAng, endAng, stroke, line){
    this.radio = radio;
    this.pos = pos;
    this.startAng = (startAng * Math.PI) / 180;
    this.endAng = (endAng * Math.PI) / 180;
    this.stroke = stroke;
    this.line = line;
    this.group = null;
    this.arc = null;
    this.start_point = null;
    this.end_point = null;
    this.init();
}

ArcShape.prototype = {
    constructor: ArcShape,
    init: function(){
        var parent = this;
        this.arc = new Kinetic.Shape({
            drawFunc: function (ctx) {
                ctx.beginPath();
                ctx.arc(0, 0, parent.radio, parent.startAng, parent.endAng, false);
                ctx.fillStrokeShape(this);
            },
            x: 0,
            y: 0,
            stroke: parent.stroke,
            strokeWidth: parent.line
        });
        this.group = new Kinetic.Group({
            x: parent.pos[0],
            y: parent.pos[1],
            draggable: false
        });
        this.group.add(this.arc);

        this.start_point = new Kinetic.Circle({
            x: parent.radio,
            y: 0,
            radius: 0.01,
            fill: parent.stroke,
            stroke: parent.stroke,
            strokeWidth: 0
        });
        this.group.add(this.start_point);

        var end_x = Math.round(Math.cos(parent.endAng) * parent.radio);
        var end_y = Math.round(Math.sin(parent.endAng) * parent.radio);

        this.end_point = new Kinetic.Circle({
            x: end_x,
            y: end_y,
            radius: 0.01,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 0
        });
        this.group.add(this.end_point);
    },
    remove: function(){
        this.group.remove();
    },
    rotate: function(deg){
        this.group.rotate((deg * Math.PI) / 180);
    },
    set_start_offset: function(){
        this.group.setOffset([this.start_point.getX(), this.start_point.getY()]);
    },
    set_xy: function(point){
        this.group.setX(point[0]);
        this.group.setY(point[1]);
    }
}
