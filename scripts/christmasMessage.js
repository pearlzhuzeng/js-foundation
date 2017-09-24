const list = document.querySelector('.output ul');
list.innerHTML = '';
const greetings = [
  'Happy Birthday!',
  'Merry Christmas my love',
  'A happy Christmas to all the family',
  "You're all I want for Christmas",
  'Get well soon',
];

for (let i = 0; i < greetings.length; i++) {
  const input = greetings[i];
  if (greetings[i].indexOf('Christmas') !== -1) {
    const result = input;
    const listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
