const cookie = document.getElementById('cookie');
const cookieCounter = document.getElementById('cookie-counter');
let cookies = 0;

cookie.addEventListener('click', () => {
  cookies++;
  cookieCounter.textContent = cookies;
});
