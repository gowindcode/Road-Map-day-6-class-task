console.log("Hi, I am working Good!");
// for Object we can hydrate the resulsts in two ways like 

const obj = {
    person : "Govind",
    friends: {
        person: "GUVI GEEKS",
    },
};
// dot operator hydrate the object results
console.log("Dot Operator:",obj.person);
console.log("Dot Operator:",obj.friends);
console.log("Dot Operator:", obj.friends.person);


//map operator hydrate the object results
console.log("Map operator in object:",obj["person"]);
console.log("Map operator in object:",obj["friends"]["person"]);
console.log("Map operator in object:", obj.friends["person"]);

for (key in obj) {
    console.log("keys :", typeof key);
    console.log(obj [key]);
};
//more example in Array

const arr = ["one", "two", 3 , ["four", 5], 6];
console.log(arr[3][0]); // answer is fout, bcz four is in 3rd of 1st index 

//basic car making objecbt

const carObject = {
name: "Virtus",
engine: "1 Liter",
seat: "Leather",
variant: "Petrol",
length: "above 4 meter",
makeWheel: function () {
    console.log("making wheels for the car");
},
makechase: function () {
    console.log("making chase of lenght", carObject.length);
},
startProduction: function () {
    carObject.makeWheel();
    carObject.makechase();
},
};
console.log(carObject);

carObject.startProduction();

console.log("___________________factroy function_____________________");
// factory method
//returns an object

function manuFactureCar (name1, engineSpec1, seat1, variantm1) {
    return {
        name1: name1,
        engineSpec1: engineSpec1,
        seat1: seat1,
        variantm1: variantm1,
    };
}

const virtus1 = manuFactureCar("virtus1", "1 Ltr", "5 Seater Leather", "Petrol");
const vento1 = manuFactureCar("vento", "1 Ltr", "5 Seater Leather", "Diesel");
console.log(virtus1);
console.log(vento1);


const data1 = "sample data";
const sampleObj = {
 //short hand property
 //data1: data1,
    data1,
};
console.log("sample object:.......", sampleObj);
////////////////// another example///////////////////////

console.log("______________________________________________");

function manuFactureCar (name, engineSpec, seat, variant) {
    return {
        name,
        engineSpec,
        seat,
        variant,
        startManufacturing: function () {
            console.log(`
    start Manufacturing ${name} model,
    setting a engine of ${engineSpec} ${variant} variant, and 
    seating capacity ${seat},
    completed the all new ${name} car for sales.
    `);
     },
    };

};

const virtus = manuFactureCar("virtus", "1.5 Ltr", "5 Seater soft polished Leather", "Petrol");
const vento = manuFactureCar("vento", "1 Ltr", "5 Seater PU type Leather", "Diesel");

console.log(virtus);
virtus.startManufacturing();
console.log(vento);
vento.startManufacturing();

///////////////this keyword method/////////////

console.log("______________________this key method__________________");

const fatherObject = {
    house: "Father House",
    car: "Father Car",
    company: "Father Company",
    getProperty: function () {
        console.log(this);
    },
    getHouseName: function () {
        console.log(this); // this key access fatherObject and values keys everything.
    },

};

fatherObject.getProperty(); // both give same results
fatherObject.getHouseName(); // both log give same result.

////////////////// another example//////////////

const grandFatherObject = {
house: "Grand father House",
getHouse: function () {
    console.log(this.house);
},
fatherObj: {
    house: "Father House 1",
    getHouse: function () {
        console.log(this.house);
    },
    
    getDetailsArrow() {
        const inArrow = () => {
        console.log(this.house);
        };
        inArrow();
    },
    getDetails: () => {
        console.log(this);
    },
},
};

grandFatherObject.getHouse();
grandFatherObject.fatherObj.getHouse();
grandFatherObject.fatherObj.getDetails(); // result same as window
console.log(window); /// same as this
console.log(this); // same as window
grandFatherObject.fatherObj.getDetailsArrow();

////////////////constructor function////////////
//create a object

console.log("____________________Constructor function______________________Variables name first letter must be in capital letter");

function ManufactureCar(brand, name, seat, engine, type, variant ) {
    this.brand = brand;
    this.name = name;
    this.seat = seat;
    this.engine = engine;
    this.type = type;
    this.variant = variant;
    this.power = engine * 100;
    this.getCarDetails = function () {
        console.log(`${this.brand}
        Car model name is ${this.name}
        seating capacity ${this.seat}
        engine capacity ${this.engine} liter ${this.type}
        ${this.variant} variant and speciality is ${this.power} BHP 
        with high performance super fast dual operating (Auto/Manual) Tranmission.  
        `);
    };
//prototypes........
ManufactureCar.prototype.getNameOfCar = function () {
    console.log(this.name);
}
};

const passat = new ManufactureCar ("Volkswagen", "Passat", 5, 2, "Sedan" , "Petrol");
console.log(passat);
passat.getCarDetails();
passat.getNameOfCar();

// create a object manufacture {}
// this = {}
// this.name = name
// {name : "Passat"}

// Class
// 4 Pillars of Opps
//Encapsulation => Ablity to define a data with methods
//Inheritance => 
//Abstraction
//Poliymorphism

// class in JS

console.log("Encapsulation");
class CarProduction {
// Encapsulation (this type of structure is called Encapsulation method) 
    constructor (name, color, fuelVariant, engineCapacity, seats, transmission) {
       this.name = name;
       this.color = color;
       this.fuelVariant = fuelVariant;
       this.engineCapacity = engineCapacity;
       this.seats = seats;
       this.transmission = transmission;
    };
// business logic or methods
getDetails () {
    console.log(`
    Name : ${this.name}
    Color : ${this.color}
    Fuel-Type : ${this.fuelVariant}
    Engine-Capacity : ${this.engineCapacity} liter
    Seats : ${this.seats} high quality leather
    Tansmission :${this.transmission}
    `);
   };  
   getSpecialDetails () {
    console.log(`Special details are ${this.transmission} features`);
};  
};

//inheritance
class Features extends CarProduction {
    constructor (name, color, fuelVariant, engineCapacity, seats, transmission, saftey, model, drive, type) {
        super (name, color, fuelVariant, engineCapacity, seats, transmission);
        this._saftey = saftey;
        this.model = model;
        this.drive = drive;
        this.type = type;
    };
   //getter method
    get saftey () {
        return this._saftey;
    };
  // setter method
  set saftey (newStarRating) {
    if (newStarRating < 0) {
        console.log("Dear Customer star rating not less than Zero", "Thank you for your valuable feedback");
    } else if (newStarRating <= 5) {
        console.log(`Dear Customer, thank you for your wonderful rating about your dream car ${this.name}, your feedback gives us confident to deliver more new cars coustomers like you, Happy journey`);
    } else {
        this._saftey = newStarRating;
    };
  };
    getFeatures () {
        //abstraction 
        let bhp = (this.engineCapacity * 100) / 1.8; // it's defaulf, here after we can't change this value in console.log or call
        console.log(`
        Saftey : ${this._saftey} star
        Model : ${this.model} 
        Drive : ${this.drive}
        Type : ${this.type}
        Horse Power : ${bhp.toFixed(1)} BHP
        `);
    };

//Polymorphism
getSpecialDetails () {
    console.log(`Special details are ${this.drive} features`);
};
    };

const car1 = new CarProduction("Polo", "Cherry Red", "Diesel", 1.5, 4, "Semi Automatic");
const car2 = new CarProduction("Tiguan", "Marine Blue", "Petrol", 4, 5, "Automatic");
console.log(car1);
car1.getDetails();
console.log(car2);
car2.getDetails();

const car3 = new Features ("Jetta", "Core Citrus", "Diesel", 2.5, 4, "Semi Automatic", 5, "Toplining", "4X4", "SUV");
console.log(car3);
car3.bhp = 400; // now here we can't change the object values, bcz it's not this. method
car3.getDetails();
car3.getFeatures();


// console.log(car3.saftey);
car3.saftey = -1; // less than 0, so reusult like above log. if result showing.
car3.saftey = 3; // here else if results showing as output.
console.log(car3.saftey);
car3.getDetails();
car3.getSpecialDetails();
