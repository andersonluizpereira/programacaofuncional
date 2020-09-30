// Uma forma fácil de corrigir esse problema é simplesmente guardar o valor do this 
//em uma variável e ao invés de chamar o this, chamar essa variável:

'use strict';

var object = {
    name: 'Matheus',
    friends: ['João', 'Ana' ],
    loop: function() {
        var self = this
        this.friends.forEach(function(friend) {
            console.log(self.name + ' knows ' + friend);
        });
    }
};

object.loop();