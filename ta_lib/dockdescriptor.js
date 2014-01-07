function DockDescriptor(){
    this.upper_dock = [];
    this.lower_dock = [];
    this.param_dock = [];
}

DockDescriptor.prototype = {
    constructor: DockDescriptor,
    add_upper_dock: function(point){
        this.upper_dock.push(point);
    },
    add_lower_dock: function(point){
        this.lower_dock.push(point);
    },
    add_param_dock: function(point){
        this.param_dock.push(point);
    },
    has_upper_dock: function(){
        if (this.upper_dock.length > 0){
            return true;
        }else{
            return false;
        }
    },
    has_lower_dock: function(){
        if (this.lower_dock.length > 0){
            return true;
        }else{
            return false;
        }
    },
    has_param_dock: function(){
        if (this.param_dock.length > 0){
            return true;
        }else{
            return false;
        }
    },
    get_upper_dock: function(){
        return this.upper_dock[0];
    },
    get_lower_dock: function(){
        return this.lower_dock[0];
    },
    has_giving_param: function(){
        var result = false;
        for (var i=0; i<this.param_dock.length; i++){
            if (this.param_dock[i][0] < 50){
                result = true;
                break;
            }
        }
        return result;
    },
    get_giving_point: function(){
        var point = null;
        for (var i=0; i<this.param_dock.length; i++){
            if (this.param_dock[i][0] < 50){
                point = this.param_dock[i];
                break;
            }
        }
        return point;
    },
    has_receiver_param: function(){
        var result = false;
        for (var i=0; i<this.param_dock.length; i++){
            if (this.param_dock[i][0] > 50){
                result = true;
                break;
            }
        }
        return result;
    },
    get_receiver_points: function(){
        var point_array = [];
        for (var i=0; i<this.param_dock.length; i++){
            if (this.param_dock[i][0] > 50){
                point_array.push(this.param_dock[i]);
            }
        }
        return point_array;
    }
}
