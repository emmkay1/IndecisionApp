// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1,1001));

const user = {
    name: 'emma', 
    cities: ['wuhan', 'lusaka', 'kabwe'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply())