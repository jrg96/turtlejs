function ColorsPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

ColorsPaletteDesc.prototype = {
    constructor: ColorsPaletteDesc,
    init_descriptor: function(){
        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('red', 25, 13, 19, 'Calibri', 'black');
        this.descriptors['red_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('green', 25, 13, 17, 'Calibri', 'black');
        this.descriptors['green_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('purple', 25, 13, 15, 'Calibri', 'black');
        this.descriptors['purple_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('orange', 22, 13, 15, 'Calibri', 'black');
        this.descriptors['orange_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('cyan', 25, 13, 19, 'Calibri', 'black');
        this.descriptors['cyan_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('white', 25, 13, 17, 'Calibri', 'black');
        this.descriptors['white_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('yellow', 21, 13, 17, 'Calibri', 'black');
        this.descriptors['yellow_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('blue', 25, 13, 17, 'Calibri', 'black');
        this.descriptors['blue_block'] = block_descriptor;

        var block_descriptor = new BlockDescriptor('block_res/box.svg', 'box', null, get_color_value);
        block_descriptor.add_label('black', 25, 13, 17, 'Calibri', 'black');
        this.descriptors['black_block'] = block_descriptor;
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}
