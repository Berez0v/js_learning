let defaultArray = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: null, y: 4 }, { x: 3, y: undefined }]

function correctCoordinates(array) {
    return array.filter(element => {
        let rtn = true;
         if (typeof element["x"] !== 'number' || typeof element["y"] !== 'number') {
                rtn = false;
            }
        return rtn;
    });

}
console.log(correctCoordinates(defaultArray));