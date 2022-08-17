let field = document.querySelector('#field');
let ball = document.querySelector('#ball');
console.log((field.offsetHeight - ball.offsetHeight)/2)
ball.style.left = `${(field.offsetWidth - ball.offsetWidth)/2}px`;
ball.style.top = `${(field.offsetHeight - ball.offsetHeight)/2}px`;

//Для того чтобы ставить мяч по углам нужно просто менять позионирование,к примеру чтобы поместить в правый нижний угол ball.style.bottom = `${0}px`;
//                                                                                                                      ball.style.right = `${0}px`;      