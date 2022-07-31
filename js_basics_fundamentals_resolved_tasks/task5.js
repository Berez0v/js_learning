//First way

//  function extractCurrencyValue(str){
//     return str.slice(1);
// }



// OR
function extractCurrencyValue(str) {
    value = "";
    for (let i = 0; i < str.length; i++)
        if (!isNaN(str[i])) {
            value += str[i];
        }
    return value;
}
console.log(extractCurrencyValue('$12220'))
console.log(extractCurrencyValue('%22220'))