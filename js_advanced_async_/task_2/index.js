function userRequest() {
    return new Promise((resolve, reject) => {
        resolve("Waiting for response...");
    })
}

userRequest().then(response => {
    let result = document.querySelector("#result");
    result.innerText = response;
    serverResponse();
})

function serverResponse() {
    return new Promise((resolve, reject) => {
        resolve("response from server");
    })
}

serverResponse().then(res => {
    result.innerText = res;
})


