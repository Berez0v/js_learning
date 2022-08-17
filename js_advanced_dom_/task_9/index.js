function showNotification(options){
  let notify = document.createElement('div');
  notify.setAttribute('class',`${options.className} notification`); 
  notify.style.top = `${options.top}px`;
  notify.style.right = `${options.right}px`;
  notify.innerText = options.message; 
  document.body.appendChild(notify);
 setTimeout(()=>notify.remove() ,1500 );


}


showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  message: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
