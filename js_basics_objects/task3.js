let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  

  function  multiplyNumeric(inputObj) {
    if (Object.keys(inputObj).length && typeof inputObj === "object") {
        for (let prop in inputObj) {
            if(typeof inputObj[prop] === "number"){
                inputObj[prop]*=2;
            }
        }
    }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
