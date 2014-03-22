function greaterthan_block(params){
    if (params[2].has_all_slots()){
        var values = params[2].get_slot_values();
        var result = false;
        if (parseInt(values[0]) > parseInt(values[1])){
            result = true;
        }
        return [true, result];
    }else{
        alert('Missing value from set Greater than block');
        return [false, false];
    }
}
