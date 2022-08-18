//для этого инпута действительные числа находяться в интервале [-100,100];

let myInput = document.querySelector('#inp');
console.log(myInput);
myInput.addEventListener('blur', () => { 
    let check = parseInt(myInput.value);
    if( check < -100 || check > 100  ){
        myInput.value= 0;
    }
});