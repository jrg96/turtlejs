function ArcShape(pos, radio, startAng, endAng, stroke, line){
    this.radio = radio;
    this.pos = pos;
    this.startAng = (startAng * Math.PI) / 180;
    this.endAng = (endAng * Math.PI) / 180;
    this.stroke = stroke;
    this.line = line;
    this.group = null;
    this.arc = null;
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
    }
}
