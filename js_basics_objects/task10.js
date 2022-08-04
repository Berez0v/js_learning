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
        valet: {
            cas: "sfds",
            ass: "dfsd"
        }
    },
    address: `Moldova`
}



// function allValues(obj) {
//     let rtn = Object.entries(obj);
//     rtn.forEach((element, index) => {
//         if (typeof element[1] === 'object') {
//             let temp = allValues(element[1]);
//             let temp1 =
//                 element = temp;
//             rtn.splice(index, 1);
//             rtn.push(temp);
//         }
//     })

//     return rtn;
// }

function allValues(obj) {
    let rtn = Object.values(obj);
    rtn.forEach((element, index) => {
        if (typeof element === 'object') {
            let temp = allValues(element);
            element = temp;
            rtn.push(temp);
        }
    })

    return rtn;
}

function Intersection(first, second) {
    console.log(allValues(first));
    console.log(allValues(second));
}
Intersection(Vasil, Fedor);