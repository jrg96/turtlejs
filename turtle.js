function Turtle(startpos, layer){
    this.layer = layer;
    this.img = new Sprite('turtle.png', layer, false);
    this.img.group.setX(startpos[0]);
    this.img.group.setY(startpos[1]);
    this.img.group.setOffset(27, 27);
    this.rotation = 0;
}

Turtle.prototype = {
    constructor: Turtle,
    move: function(pos){
        var coord = [0, 0];
        if (this.rotation == 0){
            coord[1] = -pos;
        }else if (Math.abs(this.rotation) == 90){
            coord[0] = pos;
        }else if (Math.abs(this.rotation) == 180){
            coord[1] = pos;
        }else if (Math.abs(this.rotation) == 270){
            coord[0] = -pos;
        }
        this.img.move_relative(coord);
        this.bring_front();
    },
    rotate: function(degrees){
        this.img.group.rotateDeg(degrees);
        if (this.rotation == 0 && degrees < 0){
            this.rotation = 360 + degrees;
        }else{
            this.rotation += degrees;
        }
        if (Math.abs(this.rotation) >= 360){
            if (this.rotation < 0){
                this.rotation += 360;
            }else{
                this.rotation -= 360;
            }
        }
        this.bring_front();
    },
    get_xy: function(){
        return this.img.get_xy();
    },
    bring_front: function(){
        this.img.group.moveToTop();
    }
}
