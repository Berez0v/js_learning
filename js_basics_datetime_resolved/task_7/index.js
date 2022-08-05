function add_years(inputDate,years){
  inputDate.setFullYear(inputDate.getFullYear() + years);
  return inputDate;
}

let dt = new Date(2014,10,2);
console.log(add_years(dt, 10));//.toString());
