let date = new Date();
let year = date.getFullYear();

document.querySelector('h3').innerHTML = year + '&copy';

let currentDate = document.lastModified

document.querySelector('div').textContent = `Last Updated: ${currentDate}`;
