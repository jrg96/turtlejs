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

function PenPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

PenPaletteDesc.prototype = {
    constructor: PenPaletteDesc,
    init_descriptor: function(){

        var block_descriptor = new BlockDescriptor('block_res/basic.svg', 'basic', penup_block, null);
        block_descriptor.add_label('Pen up', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['penup_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic.svg', 'basic', pendown_block, null);
        block_descriptor.add_label('Pen Down', 5, 13, 18, 'Calibri', 'black');
        this.descriptors['pendown_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', set_pen_size_block, null);
        block_descriptor.add_label('Set pen size', 5, 13, 14, 'Calibri', 'black');
        this.descriptors['set_pen_size_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', text_block, get_number);
        block_descriptor.add_label('3', 25, 13, 19, 'Calibri', 'black');
        this.descriptors['box_block'] = block_descriptor;
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}
