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

        if (json[i][1] instanceof Array){
        }
    }
}
