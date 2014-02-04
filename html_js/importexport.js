function onFileSelect(evt, palette_tracker) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.onload = (function(theFile) {
        return function(e) {
            var json_obj = JSON.parse(e.target.result);
            parseTAFile(json_obj, palette_tracker);
        };
    })(file);

    if (file.name.match(".ta$")){
        reader.readAsText(file);
    }else {
        alert("no es archivo ta");
    }
}

function parseTAFile(json, palette_tracker) {
    for (var i=0; i<json.length; i++) {
        var index = parseInt(json[i][0]);
        var factory = null;
        var block = null;

        if (json[i][1] instanceof Array){
            factory = palette_tracker.search_factory(json[i][1][0]);
        } else{
            factory = palette_tracker.search_factory(json[i][1]);
        }

        block = factory.make_block(factory.block_name, false);

        alert(block);
    }
}
