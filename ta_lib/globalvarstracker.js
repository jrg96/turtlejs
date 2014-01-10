function GlobalVarsTracker(){
    this.dic = {};
}

GlobalVarsTracker.prototype = {
    constructor: GlobalVarsTracker,
    add_var: function(key, value){
        this.dic[key] = value;
    },
    get_var: function(key){
        return this.dic[key];
    }
}
