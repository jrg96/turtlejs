function DockTracker(){
    this.dic = {};
    this.special_types = ["clampn"];

    this.add_dock("basic1arg", this.make_dock_descriptor([17, 1], [17, 43], [[115, 25]], null));
    this.add_dock("box", this.make_dock_descriptor(null, null, [[17, 25]], null));
    this.add_dock("basic", this.make_dock_descriptor([17, 1], [17, 35], null, null));
    this.add_dock("basic2arg", this.make_dock_descriptor([17, 1], [17, 85], [[115, 25], [115, 67]], null));
}

DockTracker.prototype = {
    constructor: DockTracker,
    add_dock: function(name, dock){
        this.dic[name] = dock;
    },
    get_dock: function(name){
        if (this.special_types.indexOf(name) > -1){
            if (name == "clampn"){
            }
        }
        return this.dic[name];
    },
    make_dock_descriptor: function(upper, lower, params, stack){
        var dock_descriptor = new DockDescriptor();

        if (upper != null){
            dock_descriptor.add_upper_dock(upper);
        }
        if (lower != null){
            dock_descriptor.add_lower_dock(lower);
        }
        if (params != null){
            for (var i=0; i<params.length; i++){
                dock_descriptor.add_param_dock(params[i]);
            }
        }
        if (stack != null){
            for (var i=0; i<stack.length; i++){
                dock_descriptor.add_stack_dock(stack[i]);
            }
        }

        return dock_descriptor;
    }
}
