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
                        if (isNaN(parseInt(parse_result[1])) && types[i] == 'str'){
                            result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 
                                'not_str_value_error', [values[i][1]]);
                            success = false;
                            break;
                        }
                        values[i][1] = parse_result[1];
                    }
                    //alert("Valor final de retorno de string " + values[i][1]);
                } else if (types[i] == 'bool'){
                    // at the moment... just skip any analysis of bool params
                } else if (types[i] == 'str_no_parse'){
                    if (!isNaN(parseInt(values[i][1]))){
                        result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 
                                'not_str_value_error', [values[i][1]]);
                        success = false;
                        break;
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
            //alert(result[1][0][1]);
        }
    } else{
        result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 'missing_value_error', [name]);
    }
    return result;   
}

function eval_int_user_var(name){
    var result = [-1, null];
    
    if (isNaN(parseInt(name))){
        var data = user_vars_tracker.get_var(name);
        if (data != null){
            if (isNaN(parseInt(data))){
                result[0] = 1;
                result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 'not_int_value_error', [name]);
            } else{
                result[0] = 2;
                result[1] = data;
            }
        } else{
            result[0] = 0;
            result[1] = i18n_tracker.get_err_msg(DEFAULT_LANG, 'var_not_exist_error', [name]);
        }
    }
    return result;
}

function eval_str_user_var(name){
    var result = [-1, null];
    
    if (isNaN(parseInt(name))){
        var data = user_vars_tracker.get_var(name);
        if (data != null){
            result[0] = 2;
            result[1] = data;
        } else{
            result[0] = 1;
        }
    }
    return result;
}
