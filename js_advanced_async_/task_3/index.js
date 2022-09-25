function serverResponse() {
    return new Promise(resolve => {
        
        setTimeout(() => {
            document.querySelector('#result').innerText = "response from server";
        resolve(1);
        }, 2000);


    });
}


async function userRequest() {

    document.querySelector('#result').innerText = "Waiting for response";
    return await serverResponse();

}
userRequest().then();
