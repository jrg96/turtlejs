function FlowPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

FlowPaletteDesc.prototype = {
    constructor: FlowPaletteDesc,
    init_descriptor: function(){
        var block_descriptor = new BlockDescriptor('block_res/clampn.svg', 'clampn', penup_block, null);
        block_descriptor.add_label('Repeat', 5, 13, 19, 'Calibri', 'black');
        this.descriptors['repeat_block'] = block_descriptor;
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}

