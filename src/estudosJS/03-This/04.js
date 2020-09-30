//É bem comum esquecermos a regra acima, principalmente no uso de loops:

'use strict';

var object = {
    name: 'Matheus',
    friends: ['João', 'Ana' ],
    loop: function() {
        this.friends.forEach(function(friend) {
            console.log(this.name + ' knows ' + friend);
        });
    }
};

object.loop();