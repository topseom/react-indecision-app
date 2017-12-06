// parent class
class Person {
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi. I'm ${this.name} !`;
    }
    getDescription(){
        return `${this.name} is ${this.age} old.`;
    }
    getFirstName(){
        return this.name.split(' ')[0];
    }
}

// subclass
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let descriptiion = super.getDescription();
        
        if(this.hasMajor()){
            descriptiion += `Their major is ${this.major}`;
        }
        return descriptiion;
    }
}

// subclass
class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getGretting(){
        let descriptiion = super.getGretting();

        if(this.hasLocation()){
            descriptiion += `I'm visiting from ${this.location}`;
        }
        return descriptiion;
    }
}

const me = new Traveler('Monchai Jirayupong',20,'Thailand');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());