//Reference Type
var object1 = {value: 10};
var object2 = object1;  // <========= REFERENCE
var object3 = {value: 10};

//Context vs Scope
function b(){
    let a = 4;
}

const object4 = {
    a: function(){
        console.log(this);
    }
}

//Instantiation
class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`)
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`I'm a ${this.type}.`)
    }
}

const wizard1 = new Wizard('Shelly', 'Caster');
const wizard2 = new Wizard('Shawn', 'Dark Magic');