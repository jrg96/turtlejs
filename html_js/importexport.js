function onFileSelect(evt) {
    var file = evt.target.files[0];

    if (file.name.match(".ta$")){
        alert("es archivo ta");
    }else {
        alert("no es archivo ta");
    }
}
