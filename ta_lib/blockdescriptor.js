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

function BlockDescriptor(block_img, dock_desc, callback_func, value_func){
    this.block_img = block_img;
    this.dock_desc = dock_desc;
    this.callback_func = callback_func;
    this.value_func = value_func;
    this.labels = [];
}

BlockDescriptor.prototype = {
    constructor: BlockDescriptor,
    add_label: function(value, x, y, font_size, font_type, font_color){
        var label = [];
        label["value"] = value;
        label["x"] = x;
        label["y"] = y;
        label["font_size"] = font_size;
        label["font_type"] = font_type;
        label["font_color"] = font_color;
        this.labels.push(label);
    }
}
