function DockTracker(){
    this.dic = {};

    var dock_descriptor = new DockDescriptor();
    dock_descriptor.add_upper_dock([17, 1]);
    dock_descriptor.add_lower_dock([17, 43]);
    dock_descriptor.add_param_dock([115, 25]);
    this.add_dock("basic1arg", dock_descriptor);

    var dock_descriptor = new DockDescriptor();
    dock_descriptor.add_param_dock([17, 25]);
    this.add_dock("box", dock_descriptor);

    var dock_descriptor = new DockDescriptor();
    dock_descriptor.add_upper_dock([17, 1]);
    dock_descriptor.add_lower_dock([17, 35]);
    this.add_dock("basic", dock_descriptor);
}

DockTracker.prototype = {
    constructor: DockTracker,
    add_dock: function(name, dock){
        this.dic[name] = dock;
    },
    get_dock: function(name){
        return this.dic[name];
    }
}
