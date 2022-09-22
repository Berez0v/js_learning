window.onload = () => {
    const info = JSON.parse(localStorage.getItem("data"));
    document.querySelector("#uName").value = info.name;
    document.querySelector("#city").value = info.city
    document.querySelector("#ro").checked = info.ro;
    document.querySelector("#en").checked = info.en;
    document.querySelector("#fr").checked = info.fr;
    document.querySelector("#textArea").value = info.text;

}

document.querySelector("#save").addEventListener("click", () => {
    let saveValue = {
        name: document.querySelector("#uName").value,
        city: document.querySelector("#city").value,
        ro: document.querySelector("#ro").checked,
        en: document.querySelector("#en").checked,
        fr: document.querySelector("#fr").checked,
        text: document.querySelector("#textArea").value
    }

    localStorage.setItem("data", JSON.stringify(saveValue));




})
document.querySelector("#clear").addEventListener("click", () => {
    localStorage.removeItem("data");
    document.querySelector("#uName").value = "";
    document.querySelector("#city").value = "";
    document.querySelector("#ro").checked = false;
    document.querySelector("#en").checked = false;
    document.querySelector("#fr").checked = false;
    document.querySelector("#textArea").value = "";
})

// console.log(JSON.parse(localStorage.getItem("data")));