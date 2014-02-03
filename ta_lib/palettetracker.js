function PaletteTracker(){
    this.palettes = [];
    this.id = 0;
    this.hide = false;
}

PaletteTracker.prototype = {
    constructor: PaletteTracker,
    add_palette: function(palette){
        this.palettes.push(palette);
    },
    get_visible_palette: function(){
        var palette = null;
        for (var i=0; i<this.palettes.length; i++){
            if (this.palettes[i].is_visible()){
                palette = this.palettes[i];
            }
        }
        return palette;
    },
    show_palette: function(palette){
        var visible_palette = this.get_visible_palette();
        if (visible_palette != null){
            visible_palette.hide();
        }
        palette.show();
    },
    search_factory: function(name){
        var factory = null;
        for (var i=0; i<this.palettes.length; i++){
            factory = this.palettes[i].container.get_factory(name);
            if (factory != null){
                break;
            }
        }
        return factory;
    }
}
