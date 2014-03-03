/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

function Sprite(image, layer, is_block, is_turtle, callback_func, turtle){
    this.labels = [];
    this.load_counter = 0;
    this.img = null;
    this.group = null;
    this.is_turtle = is_turtle || false;
    this.callback_func = callback_func || null;
    this.turtle = turtle || null;
    this.layer = layer;
    this.is_in_block = is_block;
    this.create_group();
    this.set_image(image);
}

Sprite.prototype = {
    constructor: Sprite,
    create_group: function(){
        // create group object, so the image and label objects that conforms the "sprite" 
        // can be treated as a whole object
        var parent = this;
        var group = new Kinetic.Group({
            draggable: this.is_turtle
        });
        // saves a reference of the object on sprite class
        this.group = group;
        // add the new object to the layer ()canvas

        if (!this.is_in_block){
            this.layer.add(group);
        }

        // style the mouse cursor depending if it's over the object or not
        group.on('mouseover', function() {
            document.body.style.cursor = 'pointer';
        });
        group.on('mouseout', function() {
            document.body.style.cursor = 'default';
        });
        group.on('dragend', function(){
            if (parent.is_turtle){
                parent.callback_func(parent.turtle);
            }
        });
    },
    set_image: function(image){
        // remove the last image set
        if(this.img != null){
            this.img.remove();
        }
        // create a new IMG DOM object for loading the image
        var imageObj = new Image();
        // saves a refence of self, so it can be used in onload function of imageObj
        var parent = this;
        // create callback function when image it's laded completely
        imageObj.onload = parent.image_on_load(imageObj, parent);
        // start to load the img

        if (image.length == 1){
            imageObj.src = image[0];
        }
    },
    set_label: function(txt, x, y, font_size, font_family, fill_color){
        // in order to preserve alignment with the image, it calculates the final coordinates
        // of the text, based that image x and y are or zero point.
        final_x = x;
        final_y = y;
        if (this.img != null){
            final_x = this.img.getX() + x;
            final_y = this.img.getY() + y;
        }
        
        // create a new Kinetic.Text object
        var textel = new Kinetic.Text({
            x: final_x,
            y: final_y,
            text: txt,
            fontSize: font_size,
            fontFamily: font_family,
            fill: fill_color
        });
        // add it to the group so it can be displayed
        this.group.add(textel);
        // add it to the array of labels
        this.labels.push(textel);
    },
    set_label_text: function(index, txt){
        if (index > -1 && index < this.labels.length){
            this.labels[index].setText(txt);
        }
    },
    image_on_load: function(imageObj, parent){
        // when image it's completely loaded, create the corresponding Kinetic image
        var img = new Kinetic.Image({
            image: imageObj,
            width: imageObj.width,
            height: imageObj.height
        });
        // saves a reference for the Kinetic image object
        parent.img = img;
        // add the image again to the group
        parent.group.add(img);
        // the image covers the text, so, we need to re-display it in front of the image
        // again
        parent.redraw_labels();
    },
    redraw_labels: function(){
        for (index=0; index<this.labels.length; index++){
            // no exists a way to remove an specific children of a Group container,
            // so we need to directly remove the object we know it's inside the Group
            this.labels[index].remove();
            this.group.add(this.labels[index]);
        }
    },
    hit: function(pos){
        x = pos[0];
        y = pos[1];

        if (x < this.group.getX()){
            return false;
        }else if (x > this.group.getX() + this.group.getWidth()){
            return false;
        }else if (y < this.group.getY()){
            return false;
        }else if (y > this.group.getY() + this.group.getHeight()){
            return false;
        }else{
            return true;
        }
    },
    move: function(pos){
        this.group.setX(pos[0]);
        this.group.setY(pos[1]);
    },
    move_relative: function(pos){
        x_pos = pos[0] + this.group.getX();
        y_pos = pos[1] + this.group.getY();
        this.group.setX(x_pos);
        this.group.setY(y_pos);
    },
    get_xy: function(){
        pos = [this.group.getX(), this.group.getY()];
        return pos;
    },
    label_width: function(){
        w = 0;
        for (index=0; index<this.labels.length; index++){
            if (this.labels[index].getWidth() > w){
                w = this.labels[index].getWidth();
            }
        }
        return w;
    },
    safe_width: function(){
        return this.img.getWidth();
    },
    safe_height: function(){
        return this.img.getHeight();
    }
}
