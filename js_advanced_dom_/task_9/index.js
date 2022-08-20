function showNotification(options) {
  let notify = document.createElement('div');
  if (options.className) {
    notify.setAttribute('class', `${options.className} notification`);
  }
  if (options.top) {
    notify.style.top = `${options.top}px`;
  }
  if (options.right) {
    notify.style.right = `${options.right}px`;
  }

  notify.innerText = options.message;
  document.body.appendChild(notify);
  setTimeout(() => notify.remove(), 1500);


}


showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  message: "Hello!", // HTML-уведомление
  className: "welcome" // дополнительный класс для div (необязательно)
});
