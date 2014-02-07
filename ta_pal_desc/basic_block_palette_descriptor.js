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
    },
    get_block_descriptor: function(name){
        return this.descriptors[name];
    }
}
