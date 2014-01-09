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
        }else{
            var h = pos;
            var o = 0;
            var a = 0;
            var ang = 0;
            var sign = +1;

            if (pos < 0){
                h = Math.abs(pos);
                sign = -1;
            }

            if (this.rotation > 0 && this.rotation < 90){
                ang = 90 - this.rotation;
            }else if (this.rotation > 90 && this.rotation < 180){
                ang = 180 - this.rotation;
            }else if (this.rotation > 180 && this.rotation < 270){
                ang = 270 - this.rotation;
            }else if (this.rotation > 270 && this.rotation < 360){
                ang = this.rotation - 270;
            }
            ang = (ang * Math.PI) / 180;
            o = Math.round(Math.sin(ang) * h);
            a = Math.round(Math.cos(ang) * h);
            if (this.rotation > 0 && this.rotation < 90){
                coord[0] = a * sign;
                coord[1] = -o * sign;
            }else if (this.rotation > 90 && this.rotation < 180){
                coord[0] = o * sign;
                coord[1] = a * sign;
            }else if (this.rotation > 180 && this.rotation < 270){
                coord[0] = -a * sign;
                coord[1] = o * sign;
            }else if (this.rotation > 270 && this.rotation < 360){
                coord[0] = -a * sign;
                coord[1] = -o * sign;
            }
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
