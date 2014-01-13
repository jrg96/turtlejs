function penup_block(params){
    params[1].pen_up();
}

function pendown_block(params){
    params[1].pen_down_action();
}

function set_pen_size_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        params[1].set_pen_size(values[0]);
    }else{
        alert('Missing value from set pen size block');
    }
}

function pen_size_value_block(){
    
}
