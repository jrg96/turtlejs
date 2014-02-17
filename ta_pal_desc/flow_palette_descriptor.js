function FlowPaletteDesc(){
    this.descriptors = [];
    this.init_descriptor();
}

FlowPaletteDesc.prototype = {
    constructor: FlowPaletteDesc,
    init_descriptor: function(){

    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}

