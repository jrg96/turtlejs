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

function text_block(params) {
    params[2].sprite.labels[0].setText(prompt('Set value:'));
}

