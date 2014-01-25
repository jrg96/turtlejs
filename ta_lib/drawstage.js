function DrawStage(container, width, height){
    this.container = container;
    this.width = width;
    this.height = height;
    this.stage = null;
    this.layer = null;
    this.anim = null;
    this.turtle = null;
    this.draw_tracker = null;
    this.bg = null;
    this.init_stage();
}

DrawStage.prototype = {
    constructor: DrawStage,
    init_stage: function(){
        this.stage = new Kinetic.Stage({
            container: this.container,
            width: this.width,
            height: this.height
        });
        this.layer = new Kinetic.Layer();
        this.stage.add(this.layer);
        this.anim = new Kinetic.Animation(function(frame) {}, this.layer);
        this.anim.start();
        this.bg = new Kinetic.Rect({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
            fill: 'white'
        });
        this.layer.add(this.bg);
        this.turtle = new Turtle([this.width/2, this.height/2], this.layer);
        this.draw_tracker = new DrawTracker(this.layer, this.turtle);
        this.turtle.draw_tracker = this.draw_tracker;
    }
}
