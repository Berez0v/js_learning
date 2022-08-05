function myFunction() {
    let birthDay = new Date(document.getElementById("birthDate").value);
    let currentDate = new Date();
    let difference = currentDate.getTime()-birthDay.getTime();
    let text = `${Math.floor(difference/(1000*3600*24*365))} years ${Math.floor(difference/(1000*3600*24*30.3))} months ${Math.floor(difference/(1000*3600*24))} days `;
    document.getElementById("Output").innerHTML = text;
  }