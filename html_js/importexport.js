function onFileSelect(evt, palette_tracker, block_tracker) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.onload = (function(theFile) {
        return function(e) {
            var json_obj = JSON.parse(e.target.result);
            parseTAFile(json_obj, palette_tracker, block_tracker);
        };
    })(file);

    if (file.name.match(".ta$")){
        reader.readAsText(file);
    }else {
        alert("no es archivo ta");
    }
}

function parseTAFile(json, palette_tracker, block_tracker) {
    block_tracker.id = 0;
    for (var i=0; i<json.length; i++) {
        var index = parseInt(json[i][0]);
        var factory = null;
        var block = null;
        var link_data = json[i][4];

        checkIDCount(block_tracker, index);

        if (json[i][1] instanceof Array){
            factory = palette_tracker.search_factory(json[i][1][0]);
        } else{
            factory = palette_tracker.search_factory(json[i][1]);
        }

        block = factory.make_block(factory.block_name, false);
        block.block_id = index;
        block.set_xy([json[i][2], json[i][3]]);

        if (json[i][1] instanceof Array){
            block.func(block.params, true, json[i][1][1]);
        }

        if (isVerticalFlow(block)){
            var upper_block = block_tracker.get_block(link_data[0]);
            var lower_block = block_tracker.get_block(link_data[link_data.length - 1])

            if (upper_block != null){
                makeUpperLink(block, upper_block);
            }

            if (lower_block != null){
                makeLowerLink(block, lower_block);
            }
        }
    }
}

function checkIDCount(block_tracker, index){
    if (block_tracker.id < index){
        block_tracker.id = index;
    }
}

function isVerticalFlow(block){
    if (block.has_lower_dock()){
        return true;
    }
}

function makeUpperLink(caller, receiver){
    if (caller.upper_block.indexOf(receiver) == -1){
        caller.upper_block.push(receiver);
        receiver.lower_block.push(caller);
    }
}

function makeLowerLink(caller, receiver){
    if (caller.lower_block.indexOf(receiver) == -1){
        caller.lower_block.push(receiver);
        receiver.upper_block.push(caller);
    }
}
