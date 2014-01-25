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
