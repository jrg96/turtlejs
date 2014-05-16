/* Copyright (c) 2014 Jorge Alberto Gómez López <gomezlopez.jorge96@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.*/

function forward(params, values){
    params[0].move(values[0][1]);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].add_point([x_pos, y_pos]);
    params[0].bring_front();
}

var forward_block = function(params){
    var result = get_block_data(params, 'Forward');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        forward(params, result[1]);
        return true;
    }
}

function backward(params, values){
    params[0].move(-values[0][1]);
    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].add_point([x_pos, y_pos]);
    params[0].bring_front();
}

function backward_block(params){
    var result = get_block_data(params, 'Backward');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        backward(params, result[1]);
        return true;
    }
}

function right(params, values){
    params[0].rotate(values[0][1]);
}

function right_block(params){
    var result = get_block_data(params, 'Right');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        right(params, result[1]);
        return true;
    }
}

function left(params, values){
    params[0].rotate(-values[0][1]);
}

function left_block(params){
    var result = get_block_data(params, 'Left');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        left(params, result[1]);
        return true;
    }
}

function get_number(params){
    return [true, params[2].block_value];
}

function text_block(params, import_action, value) {
    import_action = import_action || false;
    if (!import_action){
        var number = 0;

        var text_y = params[2].get_xy()[1] + 7;
        var text_x = params[2].get_xy()[0] + 18;
        var width = params[2].actual_center_width + 8;
            
        var textArea = "<div id='textAreaPopUp' style='position:absolute;top:" + text_y + "px;left:" + text_x + "px;z-index:30;'><input type='text' value='" + params[2].block_value + "' id='text_input' style='width:" + width + "px' />";
        $("#container2").append(textArea);
        $("#text_input").keypress(function(e){
            if (e.keyCode == 13){
                var text = $("#text_input").val();
                number = parseInt(text);
                if (!isNaN(number)){
                    params[2].set_box_label('' + number);
                    params[2].block_value = number;
                    $("#text_input").remove();
                }
            }
            var keycode = (e.which) ? e.which : e.keyCode;
            if (keycode > 31 && (keycode < 48 || keycode > 57) && keycode != 37 & keycode != 39) {
                return false;
            }else{
                return true;
            }
        });
        $("#text_input").focus();
    } else{
        params[2].sprite.labels[0].setText(value + '');
    }
}

function clean_block(params) {
    params[1].clear_canvas();
    return true;
}

function setxy(params, values){
    var zero_coord = params[0].start_pos;
    var pos = [];
    pos[0] = zero_coord[0] + values[0][1];
    pos[1] = zero_coord[1] - values[1][1];
    params[0].set_xy(pos);

    x_pos = params[0].get_xy()[0];
    y_pos = params[0].get_xy()[1];
    params[1].add_point([x_pos, y_pos]);
    params[0].bring_front();
}

function setxy_block(params){
    var result = get_block_data(params, 'Set xy');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        setxy(params, result[1]);
        return true;
    }
}

function arc(params, values){
    var arc = new ArcShape(params[0].get_xy(), values[1][1], 0, values[0][1], params[1].stroke_line, params[1].pen_size);

    params[0].layer.add(arc.group);
    arc.rotate(-180 + params[0].rotation);

    arc.set_start_offset();
    arc.set_xy(params[0].get_xy());

    var final_pos = [arc.end_point.getAbsolutePosition().x, arc.end_point.getAbsolutePosition().y];
    params[0].set_xy(final_pos);
    params[0].rotate(values[0][1]);
    params[1].add_shape(arc);
}

function arc_block(params){
    var result = get_block_data(params, 'Arc');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        arc(params, result[1]);
        return true;
    }
}

function set_heading(params, values){
    params[0].reset_rotation();
    params[0].rotate(values[0][1]);
}

function set_heading_block(params) {
    var result = get_block_data(params, 'Set heading');
    if (!result[0]){
        error_message_displayer.show_error(result[1]);
        return false;
    } else{
        set_heading(params, result[1]);
        return true;
    }
}

function get_turtle_heading(params){
    return [true, params[0].rotation];
}

function get_turtle_x(params){
    return [true, params[0].get_xy()[0] - params[0].start_pos[0]];
}

function get_turtle_y(params){
    return [true, params[0].get_xy()[1] - params[0].start_pos[1]];
}
