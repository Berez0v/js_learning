let Vasil = {
    name: `Vasil`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: `email@domain.com`
    },
    address: `Moldova`
}

let Fedor = {
    name: `Fedor`,
    age: 12324,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: `email@domain.com`,
    },
    address: `Moldova`
}



function allValues(obj) {
    let returnValue = Object.entries(obj);
    returnValue.forEach((element, index) => {
        if (typeof element[1] === 'object') {
            let temp = allValues(element[1]);
            element = temp;
            returnValue.push(temp);
        }
    })

    return returnValue;
}

function deleteObjects(arr) {
    arr.forEach((element, index) => {
        if (Array.isArray(element[1])) {
            deleteObjects(element[1]);
        }
        if (typeof element[1] === "object" && !Array.isArray(element[1])) {
            arr.splice(index, 1);
        }
    })
}
function searchIntersections(firstV, secondV) {
    let returnValue =[];
    firstV.forEach((element, index) => {
        if (Array.isArray(element[1])) {
            returnValue.push(searchIntersections(element, secondV[index]));

        }
        if (element[1] === secondV[index][1]) {
            returnValue.push(element);
        }
        
    })
    return returnValue;
}
function returnValue(arr){
    arr.forEach(element => {
        if (Array.isArray(element[3])){
            let temp = returnValue(element);
            element = temp;
            console.log(temp);
      
        }
    })
   return Object.fromEntries(arr);
}
function Intersection(first, second) {
    let firstV = allValues(first);
    let secondV = allValues(second);
    deleteObjects(firstV);
    deleteObjects(secondV);
    // console.log(searchIntersections(firstV,secondV));
  return  returnValue(searchIntersections(firstV,secondV));
// return Object.fromEntries(searchIntersections(firstV,secondV));

}
Intersection(Vasil, Fedor);
console.log(Intersection(Vasil, Fedor));
//I don't know how it works,but it works!))))