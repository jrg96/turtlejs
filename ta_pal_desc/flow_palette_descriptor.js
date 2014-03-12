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

function FlowPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

FlowPaletteDesc.prototype = {
    constructor: FlowPaletteDesc,
    init_descriptor: function(){
        var block_descriptor = new BlockDescriptor(['block_res/clampn.svg'], 'clampn', repeat_block, null);
        block_descriptor.add_label('Repeat', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['repeat_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor(['block_res/clamp-top.svg', 'block_res/clamp-filler.svg', 'block_res/clamp-bottom.svg'], 'clamp', forever_block, null);
        block_descriptor.component_positions = [0, 44, 18];
        block_descriptor.add_label('Forever', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['forever_block'] = block_descriptor;
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}

