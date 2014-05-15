function get_block_data(params, name){
    var result = [false, null];
    var success = true;

    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        var types = params[2].get_param_types();
        
        for (var i=0; i<values.length; i++){
            if (values[i][0]){
                if (types[i] == 'int'){
                    parse_result = eval_int_user_var(values[i][1]);
                
                    if ((parse_result[0] == 0) || (parse_result[0] == 1)){
                        result[1] = parse_result[1];
                        success = false;
                        break;
                    } else if(parse_result[0] != -1){
                        values[i][1] = parse_result[1];
                    }
                } else if (types[i] == 'str_int' || types[i] == 'str'){
                    parse_result = eval_str_user_var(values[i][1]);
                    if (parse_result[0] == -1 && types[i] == 'str'){
                        result[1] = parse_result[1];
                        success = false;
                        break;
                    } else if (parse_result[0] == 2){
                        if (!isNaN(parseInt(parse_result[1])) && types[i] == 'str'){
                            result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 
                                'not_str_value_error', [values[i][1]]);
                            success = false;
                            break;
                        }
                        values[i][1] = parse_result[1];
                    }
                }
            } else{
                success = false;
                result[1] = values[i][1];
                break;
            }
        }

        if (success){
            result[0] = true;
            result[1] = values;
        }
    } else{
        result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 'missing_value_error', [name]);
    }
    return result;   
}
