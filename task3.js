let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-roll");
console.log(styles);

function changeMiddleElement(array_, value) {
    array_[Math.round(array_.length / 2) - 1] = value;
}

changeMiddleElement(styles, "Classic");
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap","Raggy");
console.log(styles);

