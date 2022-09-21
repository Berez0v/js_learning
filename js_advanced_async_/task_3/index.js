function serverResponse() {
    let res;
    setTimeout(() => {
        document.querySelector('#result').innerText = "response from server";
    }, 2000);
    return 1;
}


async function userRequest() {

    document.querySelector('#result').innerText = "Waiting for response";
    return await serverResponse();

}
userRequest();
