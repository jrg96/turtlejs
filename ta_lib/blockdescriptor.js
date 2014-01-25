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
