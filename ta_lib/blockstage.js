function BlockStage(container, width, height){
    this.container = container;
    this.width = width;
    this.height = height;
    this.stage = null;
    this.layer = null;
    this.anim = null;
    this.init_stage();
}

BlockStage.prototype = {
    constructor: BlockStage,
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
    }
}
