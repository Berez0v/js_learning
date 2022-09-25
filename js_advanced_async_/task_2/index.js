function userRequest() {
    return new Promise((resolve, reject) => {
        resolve("Waiting for response...");
    })

}

function serverResponse() {
    return new Promise((resolve, reject) => {
        resolve("response from server");
    })
}
userRequest().then(response => {
    let result = document.querySelector("#result");
    result.innerText = response;

    setTimeout(() => {

        serverResponse().then(res => {
            result.innerText = res;
        })
    }, 2000);
})
