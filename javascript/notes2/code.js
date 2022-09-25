const body = document.querySelector('body');

const par = document.createElement('p');
par.textContent = "Hey, I'm red";
par.style.backgroundColor = "red"
body.append(par)

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.backgroundColor = "blue"

body.append(h3)

const div = document.createElement('div');
div.style.borderStyle = "solid";
div.style.borderColor = "black";

const h1 = document.createElement('h1');
h1.textContent = "I'm a div!";

const par2 = document.createElement('p');
par2.textContent = "Me too!";

div.append(h1);
div.append(par2)
body.append(div);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});