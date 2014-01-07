var forward_block = function(params){
    params[0].move(60);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].add_point([x_pos, y_pos]);
    params[0].bring_front();
}

function backward_block(params){
    params[0].move(-60);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].add_point([x_pos, y_pos]);
    params[0].bring_front();
}

function right_block(params){
    params[0].rotate(90);
}

function left_block(params){
    params[0].rotate(-90);
}
