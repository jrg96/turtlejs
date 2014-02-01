function onFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();

    reader.onload = (function(theFile) {
        return function(e) {
            alert(e.target.result);
        };
    })(file);

    if (file.name.match(".ta$")){
        reader.readAsText(file);
    }else {
        alert("no es archivo ta");
    }
}
