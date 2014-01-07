var forward_block = function(params){
    if (params[1].length == 0){
        params[1].push(params[0].get_xy()[0]);
        params[1].push(params[0].get_xy()[1]);
    }
    params[0].move(20);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].push(x_pos);
    params[1].push(y_pos);

    if(params[2] != null){
        params[2].remove();
    }
    params[2] = new Kinetic.Line({
        points: params[1],
        stroke: 'red',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round'
    });
    params[0].layer.add(params[2]);
    params[0].bring_front();
}

function backward_block(params){
    if (params[1].length == 0){
        params[1].push(params[0].get_xy()[0]);
        params[1].push(params[0].get_xy()[1]);
    }
    params[0].move(-20);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].push(x_pos);
    params[1].push(y_pos);

    if(params[2] != null){
        params[2].remove();
    }
    params[2] = new Kinetic.Line({
        points: params[1],
        stroke: 'red',
        strokeWidth: 3,
        lineCap: 'round',
        lineJoin: 'round'
    });
    params[0].layer.add(params[2]);
    params[0].bring_front();
}

function right_block(params){
    params[0].rotate(90);
}

function left_block(params){
    params[0].rotate(-90);
}

function text_block(params) {
    console.log(params);
    params[0].labels[0].setText(prompt('New Text:'));
    params[0].layer.draw();
}