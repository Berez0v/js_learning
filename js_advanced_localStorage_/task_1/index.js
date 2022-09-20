

let textArea = document.querySelector('#myText');
textArea.value = localStorage.getItem('myarea');
textArea.oninput = () => {
    localStorage.setItem('myarea', textArea.value)
};
const button = document.querySelector("#clearButton");
button.onclick = ()=>{
    localStorage.clear();
    textArea.value= "";
}