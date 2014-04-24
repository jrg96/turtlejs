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

function I18n(){
    this.words = {};
}

I18n.prototype = {
    constructor: I18n,
    add_label: function(block_name, lang, type, properties){
        if(!this.words[block_name]){
            this.words[block_name] = {};
        }
        if (!this.words[block_name][lang]){
            this.words[block_name][lang] = {};
        }
        for(var i=0; i<type.length; i++){
           if (!this.words[block_name][lang][type[i]]){
               this.words[block_name][lang][type[i]] = [];
           }
           this.words[block_name][lang][type[i]].push(properties);
        }
    },
    get_labels: function(block_name, lang, type){
        if (this.words[block_name][lang] != null){
            return this.words[block_name][lang][type];
        } else{
            return this.words[block_name]['en_US'][type];
        }
    },
    change_language: function(lang){
        if (DEFAULT_LANG != lang){
            DEFAULT_LANG = lang;
            this.change_palette_labels();
            this.change_block_labels();
        }
    },
    change_palette_labels: function(){
        var palettes = palette_tracker.get_palettes();
        for (var i=0; i<palettes.length; i++){
            var factories = palettes[i].container.get_factories();
            var keys = [];
            var descriptors = palettes[i].pal_desc;
            
            for (var key in factories){
                if (factories.hasOwnProperty(key)){
                    keys.push(key);
                }
            }

            for (var key in factories){
                this.change_factory_labels(factories[key]);
            }
            
            /*for (var i=0; i<descriptors.length; i++){
                var descriptor = descriptors[i];
                descriptor.delete_all_labels();
                alert(descriptor.block_name + DEFAULT_LANG + FACTORY_SIDE);
                descriptor.add_labels(descriptor.block_name, DEFAULT_LANG, FACTORY_SIDE);
            }*/
        }
    },
    change_factory_labels: function(factory){
        factory.sprite.delete_all_labels();
        factory.sprite.set_labels(this.get_labels(factory.block_name, DEFAULT_LANG, BLOCK_SIDE));
    },
    change_block_labels: function(){
        var blocks = block_tracker.get_blocks();
        for (var i=0; i<blocks.length; i++){
            var block = blocks[i];
            block.sprite.delete_all_labels();
            block.sprite.set_labels(this.get_labels(block.block_type, DEFAULT_LANG, BLOCK_SIDE));
        }
    }
}

var i18n_tracker = new I18n();
