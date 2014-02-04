$(document).ready(function() {
    $("#basictb-bt").click(function(){
        if (basic1.is_visible()){
            basic1.hide();
        }else{
            palette_tracker.show_palette(basic1);
        }
    });
    $("#pentb-bt").click(function(){
        if (pen_palette.is_visible()){
            pen_palette.hide();
        }else{
            palette_tracker.show_palette(pen_palette);
        }
    });
    $("#colortb-bt").click(function(){
        if (colors_palette.is_visible()){
            colors_palette.hide();
        }else{
            palette_tracker.show_palette(colors_palette);
        }
    });
    $("#run-bt").click(function(){
        var starter_blocks = block_tracker.get_starter_blocks();
        for (var i=0; i<starter_blocks.length; i++){
             starter_blocks[i].chain_exec();
        }
    });
    $("#clear-bt").click(function(){
        draw_stage.draw_tracker.clear_canvas();
    });
    $("#hideshow-bt").click(function(){
        if (!block_tracker.are_blocks_visible()){
            block_tracker.hide_blocks();
        }else{
            block_tracker.show_blocks();
        }
    });
    $("#open-bt").click(function(){
        $("#input-file").focus().click();
    });
    $("#input-file").change(function(evt){
        onFileSelect(evt, palette_tracker, block_tracker);
    });
});
