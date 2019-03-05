const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', function(a,b) {
    console.log(a + b);
});

eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor (name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let sas = new Person('Sanjith');
let sas1 = new Person('Sanjith new');
sas1.on('name', ()=> {
    console.log('Second object '+ sas1.name);
});
sas.on('name', ()=> {
    console.log('I am ' + sas.name);
});

sas.emit('name');
sas1.emit('name');