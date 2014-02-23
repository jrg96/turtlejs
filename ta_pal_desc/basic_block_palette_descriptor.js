# Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
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
# along with this program. If not, see <http://www.gnu.org/licenses/>.

function BasicBlockDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

BasicBlockDesc.prototype = {
    constructor: BasicBlockDesc,
    init_descriptor: function(){

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', forward_block, null);
        block_descriptor.add_label('Forward', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['forward_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', backward_block, null);
        block_descriptor.add_label('Backward', 5, 13, 17, 'Calibri', 'black');
        this.descriptors['backward_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', right_block, null);
        block_descriptor.add_label('Right', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['right_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', left_block, null);
        block_descriptor.add_label('Left', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['left_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', text_block, get_number);
        block_descriptor.add_label('100', 25, 13, 19, 'Calibri', 'black');
        this.descriptors['box_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic.svg', 'basic', clean_block, null);
        block_descriptor.add_label('Clean', 5, 13, 18, 'Calibri', 'black');
        this.descriptors['clean_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic2arg.svg', 'basic2arg', setxy_block, null);
        block_descriptor.add_label('set xy', 18, 30, 24, 'Calibri', 'black');
        block_descriptor.add_label('x', 79, 10, 20, 'Calibri', 'black');
        block_descriptor.add_label('y', 79, 50, 20, 'Calibri', 'black');
        this.descriptors['setxy_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic2arg.svg', 'basic2arg', arc_block, null);
        block_descriptor.add_label('arc', 18, 30, 24, 'Calibri', 'black');
        block_descriptor.add_label('angle', 40, 10, 20, 'Calibri', 'black');
        block_descriptor.add_label('radius', 32, 56, 20, 'Calibri', 'black');
        this.descriptors['arc_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/basic1arg.svg', 'basic1arg', set_heading_block, null);
        block_descriptor.add_label('Set heading', 5, 15, 14, 'Calibri', 'black');
        this.descriptors['set_heading_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', text_block, get_number);
        block_descriptor.add_label('0', 35, 13, 19, 'Calibri', 'black');
        this.descriptors['heading_block'] = block_descriptor;
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}
