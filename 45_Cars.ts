// // Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function stocreCarinfo(manufacturer: string, modelName: string, ...args: [string, any][]) {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: modelName
    };
    for (let i = 0; i < args.length; i++) {
        car[args[i][0]] = args[i][1];
    }
    return car;
}
console.log(stocreCarinfo("Toyota", "Corolla", ["color", "black"], ["year", 2020]));
console.log(stocreCarinfo("Honda", "Civic", ["color", "red"], ["year", 2018]));
console.log(stocreCarinfo("Ford", "Mustang", ["color", "blue"], ["year", 2019]));