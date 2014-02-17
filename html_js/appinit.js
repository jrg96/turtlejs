var global_tracker = new GlobalVarsTracker();
var block_tracker = new BlockTracker();
var palette_tracker = new PaletteTracker();
var dock_tracker = new DockTracker();
var draw_stage = new DrawStage('container2', $(window).width() - 17, $(window).height());

block_tracker.set_palette_tracker(palette_tracker);

global_tracker.add_var('block_tracker', block_tracker);
global_tracker.add_var('draw_stage', draw_stage);
global_tracker.add_var('palette_tracker', palette_tracker);
global_tracker.add_var('dock_tracker', dock_tracker);

var basic1 = new BasicBlockPalette(475, 200, 'green', draw_stage.layer, new BasicBlockDesc(), global_tracker);
palette_tracker.add_palette(basic1);

var pen_palette = new PenPalette(475, 100, 'green', draw_stage.layer, new PenPaletteDesc(), global_tracker);
palette_tracker.add_palette(pen_palette);

var colors_palette = new ColorsPalette(475, 100, 'green', draw_stage.layer, new ColorsPaletteDesc(), global_tracker);
palette_tracker.add_palette(colors_palette);

var flow_palette = new FlowPalette(475, 100, 'green', draw_stage.layer, new FlowPaletteDesc(), global_tracker);
palette_tracker.add_palette(flow_palette);
