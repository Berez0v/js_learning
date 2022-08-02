
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function calculateSalaries(inputObj) {
    let sum = 0;
    if (Object.keys(inputObj).length && typeof inputObj === "object") {
        for (let name in inputObj) {
            sum += inputObj[name];
        }
    }
    return sum;
}
console.log(calculateSalaries(salaries));

console.log(calculateSalaries({}));
