var forward_block = function(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        params[0].move(values[0]);
        x_pos = params[0].get_xy()[0];
        y_pos = params[0].get_xy()[1];
        params[1].add_point([x_pos, y_pos]);
        params[0].bring_front();
    }else{
        alert('Missing value from forward block');
    }
}

function backward_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        params[0].move(-values[0]);
        x_pos = params[0].get_xy()[0];
        y_pos = params[0].get_xy()[1];
        params[1].add_point([x_pos, y_pos]);
        params[0].bring_front();
    }else{
       alert('Missing value from backward block');
    }
}

function right_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        params[0].rotate(values[0]);
    }else{
        alert('Missing value from right block');
    }
}

function left_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        params[0].rotate(-values[0]);
    }else{
        alert('Missing value from right block');
    }
}

function get_number(params){
    var value = params[2].sprite.labels[0].getText();
    value = parseInt(value);
    return value;
}

function text_block(params, import_action, value) {
    import_action = import_action || false;
    if (!import_action){
        params[2].sprite.labels[0].setText(prompt('Set value:'));
    } else{
        params[2].sprite.labels[0].setText(value + '');
    }
}

function clean_block(params) {
    params[1].clear_canvas();
}

function setxy_block(params){
    var zero_coord = params[0].start_pos;

    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        var pos = [];
        pos[0] = zero_coord[0] + values[0];
        pos[1] = zero_coord[1] - values[1];
        params[0].set_xy(pos);
    }else{
        alert('Missing value from set xy block');
    }
}

function arc_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        var arc = new ArcShape(params[0].get_xy(), values[1], 0, values[0], params[1].stroke_line, params[1].pen_size);
        params[0].layer.add(arc.group);
        params[1].add_shape(arc);
        arc.rotate(-180 + params[0].rotation);
    }else{
        alert('Missing value from arc block');
    }
}
